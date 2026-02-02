import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { TrendingDown, DollarSign, Zap, Clock } from 'lucide-react'

// Embedded ROI Calculator component (no <Head>, no routing). Safe to use on landing page.
export default function ROICalculator() {
  const [data, setData] = useState(null)
  const [teamSize, setTeamSize] = useState(100)
  const [months, setMonths] = useState(12)

  useEffect(() => {
    // Pricing + use-case dataset is local by design.
    // NOTE: Keep claims factual; avoid invented customer counts/testimonials.
    const pricingData = {
      agentforce: {
        name: 'Salesforce Agentforce',
        pricing: {
          perConversation: 2.0,
          perMonth_100SDRs: 60000,
          perMonth_500SDRs: 300000,
          perMonth_1000SDRs: 600000,
          setupFee: 50000,
          dataCloudMinimum: 25000,
        },
        limitations: [
          'May require Data Cloud depending on implementation',
          'Can be expensive for large teams',
          'Locked into Salesforce ecosystem',
          'Limited external integrations',
          'Implementation overhead',
        ],
      },
      saleslobster: {
        name: 'SalesLobster 🦞',
        pricing: {
          perConversation: 0.05,
          perMonth_100SDRs: 1500,
          perMonth_500SDRs: 7500,
          perMonth_1000SDRs: 15000,
          setupFee: 0,
          dataCloudRequired: false,
        },
        advantages: [
          'Lower unit cost per conversation (configurable)',
          'No Data Cloud required for core flows',
          'Open architecture (OpenClaw)',
          'Multi-channel support (Slack, Teams, Discord)',
          'Faster iteration cycle',
        ],
      },
      useCases: [
        {
          name: 'Meeting Notes → Salesforce',
          agentforceTime: 'Manual + tooling',
          saleslobsterTime: '< 1 minute',
          agentforceCost: 2.0,
          saleslobsterCost: 0.05,
          timeValue: 'Save time per rep',
        },
        {
          name: 'Meeting Prep Briefing',
          agentforceTime: 'Manual research',
          saleslobsterTime: 'Automated',
          agentforceCost: 2.0,
          saleslobsterCost: 0.05,
          timeValue: 'Improve call quality',
        },
        {
          name: 'Apex Code Assistance',
          agentforceTime: 'Varies',
          saleslobsterTime: 'Automated drafts + tests',
          agentforceCost: 2.0,
          saleslobsterCost: 0.05,
          timeValue: 'Ship faster',
        },
        {
          name: 'Order Chat (Customer Support)',
          agentforceTime: 'Support queue',
          saleslobsterTime: 'Instant',
          agentforceCost: 2.0,
          saleslobsterCost: 0.05,
          timeValue: 'Deflect tickets',
        },
      ],
    }

    setData(pricingData)
  }, [])

  if (!data) return <div className="stat-card">Loading calculator…</div>

  // Pricing model (simple interpolation between reference tiers)
  const calcMonthly = (vendor) => {
    const p = data[vendor].pricing
    const t = teamSize

    if (t <= 100) return p.perMonth_100SDRs * (t / 100)
    if (t <= 500) {
      const a = p.perMonth_100SDRs
      const b = p.perMonth_500SDRs
      return a + ((b - a) * (t - 100)) / (500 - 100)
    }
    if (t <= 1000) {
      const a = p.perMonth_500SDRs
      const b = p.perMonth_1000SDRs
      return a + ((b - a) * (t - 500)) / (1000 - 500)
    }
    // linear beyond 1000
    return p.perMonth_1000SDRs * (t / 1000)
  }

  const agentforceMonthly = calcMonthly('agentforce')
  const saleslobsterMonthly = calcMonthly('saleslobster')

  const agentforceTotal = agentforceMonthly * months + data.agentforce.pricing.setupFee + data.agentforce.pricing.dataCloudMinimum
  const saleslobsterTotal = saleslobsterMonthly * months + data.saleslobster.pricing.setupFee

  const savings = agentforceTotal - saleslobsterTotal
  const savingsPct = agentforceTotal > 0 ? (savings / agentforceTotal) * 100 : 0

  const chartData = [
    { name: 'Agentforce', cost: Math.round(agentforceTotal) },
    { name: 'SalesLobster', cost: Math.round(saleslobsterTotal) },
  ]

  const yearly = [1, 2, 3].map((y) => {
    const m = y * 12
    const af = agentforceMonthly * m + data.agentforce.pricing.setupFee + data.agentforce.pricing.dataCloudMinimum
    const sl = saleslobsterMonthly * m
    return {
      year: `Year ${y}`,
      agentforce: Math.round(af),
      saleslobster: Math.round(sl),
      savings: Math.round(af - sl),
    }
  })

  const pieData = [
    { name: 'SalesLobster', value: Math.max(1, Math.round(saleslobsterTotal)) },
    { name: 'Savings', value: Math.max(0, Math.round(savings)) },
  ]

  const COLORS = ['#FF6B35', '#22C55E']

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="stat-card">
          <div className="flex items-center gap-3 mb-4">
            <UsersIcon />
            <h3 className="text-lg font-bold">Team Size</h3>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">SDRs / Users</span>
            <span className="text-lobster font-bold text-xl">{teamSize}</span>
          </div>
          <input
            type="range"
            min={10}
            max={1000}
            step={10}
            value={teamSize}
            onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>10</span>
            <span>1000</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-lobster" size={22} />
            <h3 className="text-lg font-bold">Time Horizon</h3>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Months</span>
            <span className="text-lobster font-bold text-xl">{months}</span>
          </div>
          <input
            type="range"
            min={3}
            max={36}
            step={1}
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value, 10))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>3</span>
            <span>36</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="stat-card">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="text-lobster" size={22} />
            <h3 className="font-bold">Estimated Savings</h3>
          </div>
          <div className="text-3xl font-extrabold text-green-400">${savings.toLocaleString()}</div>
          <p className="text-sm text-gray-400 mt-2">Over {months} months (simple model)</p>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="text-lobster" size={22} />
            <h3 className="font-bold">Savings %</h3>
          </div>
          <div className="text-3xl font-extrabold text-lobster">{Math.max(0, savingsPct).toFixed(1)}%</div>
          <p className="text-sm text-gray-400 mt-2">vs Agentforce estimate</p>
        </div>

        <div className="stat-card">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-lobster" size={22} />
            <h3 className="font-bold">Notes</h3>
          </div>
          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>Model is intentionally simplified.</li>
            <li>Adjust assumptions in code as we learn more.</li>
          </ul>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="stat-card">
          <h3 className="font-bold mb-4">Total Cost Comparison</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', color: '#E5E7EB' }} />
                <Bar dataKey="cost" fill="#FF6B35" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="stat-card">
          <h3 className="font-bold mb-4">Savings Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90}>
                  {pieData.map((_, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', color: '#E5E7EB' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <h3 className="font-bold mb-4">1–3 Year View</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={yearly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', color: '#E5E7EB' }} />
              <Legend />
              <Line type="monotone" dataKey="agentforce" stroke="#EF4444" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="saleslobster" stroke="#FF6B35" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="savings" stroke="#22C55E" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Disclaimer: illustrative estimates only. Real-world pricing depends on contract, usage, implementation, and add-ons.
        </p>
      </div>
    </div>
  )
}

function UsersIcon() {
  return (
    <svg
      className="text-lobster"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 21v-2a4 4 0 0 0-3-3.87"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
