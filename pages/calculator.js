import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingDown, DollarSign, Zap, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ROICalculator() {
  const [data, setData] = useState(null)
  const [teamSize, setTeamSize] = useState(100)
  const [months, setMonths] = useState(12)
  
  useEffect(() => {
    // Load pricing data
    const pricingData = {
      agentforce: {
        name: "Salesforce Agentforce",
        pricing: {
          perConversation: 2.00,
          perMonth_100SDRs: 60000,
          perMonth_500SDRs: 300000,
          perMonth_1000SDRs: 600000,
          setupFee: 50000,
          dataCloudMinimum: 25000
        },
        limitations: [
          "Requires Data Cloud subscription",
          "Expensive for large teams",
          "Locked into Salesforce ecosystem",
          "Limited external integrations",
          "High implementation costs",
          "Long setup and training period"
        ]
      },
      saleslobster: {
        name: "SalesLobster 🦞",
        pricing: {
          perConversation: 0.05,
          perMonth_100SDRs: 1500,
          perMonth_500SDRs: 7500,
          perMonth_1000SDRs: 15000,
          setupFee: 0,
          dataCloudRequired: false
        },
        advantages: [
          "95%+ cost savings vs Agentforce",
          "No Data Cloud required",
          "Open architecture (OpenClaw)",
          "Multi-channel support (Slack, Teams, Discord)",
          "No licensing lock-in",
          "Faster innovation cycle"
        ]
      },
      useCases: [
        {
          name: "Meeting Notes Processing",
          agentforceTime: "20 mins manual",
          saleslobsterTime: "< 1 minute",
          agentforceCost: 2.00,
          saleslobsterCost: 0.05,
          timeValue: "19 mins saved",
          frequency: "10x/day per SDR"
        },
        {
          name: "Meeting Prep Briefing",
          agentforceTime: "30 mins research",
          saleslobsterTime: "< 2 minutes",
          agentforceCost: 2.00,
          saleslobsterCost: 0.03,
          timeValue: "28 mins saved",
          frequency: "5x/day per SDR"
        },
        {
          name: "Apex Deployment",
          agentforceTime: "2-4 hours",
          saleslobsterTime: "15-30 mins",
          agentforceCost: 10.00,
          saleslobsterCost: 0.50,
          timeValue: "1.5-3.5 hours saved",
          frequency: "2-3x/week for dev team"
        }
      ]
    }
    setData(pricingData)
  }, [])

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lobster mx-auto"></div>
        <p className="text-gray-400 mt-4">Loading calculator...</p>
      </div>
    </div>
  )

  const agentforceCost = data.agentforce.pricing.perMonth_100SDRs * (teamSize / 100) * months
  const saleslobsterCost = data.saleslobster.pricing.perMonth_100SDRs * (teamSize / 100) * months
  const savings = agentforceCost - saleslobsterCost
  const savingsPercent = Math.round((savings / agentforceCost) * 100)

  const chartData = Array.from({ length: months }, (_, i) => ({
    month: i + 1,
    Agentforce: Math.round(data.agentforce.pricing.perMonth_100SDRs * (teamSize / 100)),
    SalesLobster: Math.round(data.saleslobster.pricing.perMonth_100SDRs * (teamSize / 100)),
  }))

  const comparisonData = [
    { name: 'Agentforce', value: agentforceCost },
    { name: 'SalesLobster', value: saleslobsterCost },
  ]

  const COLORS = ['#EF4444', '#FF6B35']

  return (
    <>
      <Head>
        <title>SalesLobster ROI Calculator - Calculate Your Savings</title>
        <meta name="description" content="Interactive ROI calculator showing SalesLobster savings vs Salesforce Agentforce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-gray-700 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <div className="text-6xl mb-4">🧮</div>
              <h1 className="section-title mb-4">
                See Your Exact <span className="gradient-text">Savings</span>
              </h1>
              <p className="section-subtitle mb-8">
                Calculate how much you'll save replacing Agentforce with SalesLobster
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Inputs */}
            <div className="stat-card">
              <h2 className="text-2xl font-bold mb-6">Customize Your Calculation</h2>
              
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4">Team Size</label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 text-sm">{teamSize} SDRs</span>
                  <span className="text-3xl font-bold text-lobster">{teamSize}</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4">Projection Period</label>
                <select
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-lobster transition"
                >
                  <option value={3}>3 Months</option>
                  <option value={6}>6 Months</option>
                  <option value={12}>1 Year (12 months)</option>
                  <option value={24}>2 Years (24 months)</option>
                  <option value={36}>3 Years (36 months)</option>
                </select>
              </div>

              <div className="text-sm text-gray-400 space-y-2 border-t border-gray-700 pt-6">
                <p className="font-semibold text-white mb-4">Includes:</p>
                <p className="flex items-center gap-2">✓ Meeting notes processing</p>
                <p className="flex items-center gap-2">✓ Meeting prep briefing</p>
                <p className="flex items-center gap-2">✓ Apex deployment automation</p>
                <p className="flex items-center gap-2">✓ Multi-channel integration</p>
                <p className="flex items-center gap-2">✓ 24/7 support</p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="stat-card border-2 border-lobster">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="text-lobster" size={32} />
                  <div>
                    <p className="text-gray-400 text-sm">Total Savings ({months} months)</p>
                    <p className="text-4xl font-bold text-lobster">${(savings / 1000).toFixed(1)}k</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <p className="text-gray-400 text-xs mb-2 font-semibold">Agentforce Cost</p>
                  <p className="text-2xl font-bold">${(agentforceCost / 1000).toFixed(1)}k</p>
                  <p className="text-gray-500 text-xs mt-1">${agentforceCost.toLocaleString()}</p>
                </div>
                <div className="stat-card border-green-600 border">
                  <p className="text-gray-400 text-xs mb-2 font-semibold">SalesLobster Cost</p>
                  <p className="text-2xl font-bold text-green-400">${(saleslobsterCost / 1000).toFixed(1)}k</p>
                  <p className="text-gray-500 text-xs mt-1">${saleslobsterCost.toLocaleString()}</p>
                </div>
              </div>

              <div className="stat-card bg-green-900/20 border-green-600 border">
                <p className="text-gray-400 text-sm mb-2 font-semibold">Cost Reduction</p>
                <p className="text-4xl font-bold text-green-400">{savingsPercent}%</p>
                <p className="text-green-400 text-sm mt-2">You save {savingsPercent}% every month</p>
              </div>

              <div className="stat-card bg-blue-900/20 border-blue-600 border">
                <p className="text-gray-400 text-sm mb-2 font-semibold">Monthly Savings</p>
                <p className="text-3xl font-bold text-blue-400">${(savings / months / 1000).toFixed(1)}k</p>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="stat-card">
              <h3 className="text-xl font-bold mb-4">Monthly Cost Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563', borderRadius: '8px' }} />
                  <Legend />
                  <Line type="monotone" dataKey="Agentforce" stroke="#EF4444" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="SalesLobster" stroke="#10B981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="stat-card">
              <h3 className="text-xl font-bold mb-4">Total Cost ({months} months)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={comparisonData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: $${(value / 1000).toFixed(0)}k`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {comparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${(value / 1000).toFixed(1)}k`} contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12 border-t border-gray-700 pt-12">
            <h2 className="text-3xl font-bold mb-8 text-center">What You Can Automate</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.useCases.map((useCase, idx) => (
                <div key={idx} className="stat-card">
                  <h3 className="font-bold text-lg mb-4">{useCase.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-400 text-xs">Time Saved</p>
                      <p className="font-bold text-green-400">{useCase.timeValue}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Cost per Use</p>
                      <div className="flex justify-between items-center">
                        <span className="line-through text-red-400">${useCase.agentforceCost.toFixed(2)}</span>
                        <span className="text-green-400 font-bold">${useCase.saleslobsterCost.toFixed(2)}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Frequency</p>
                      <p className="text-lobster font-semibold">{useCase.frequency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 border-t border-gray-700 pt-12">
            <div className="stat-card border-red-700 border-2">
              <h3 className="text-xl font-bold mb-4 text-red-400">⚠️ Agentforce Limitations</h3>
              <ul className="space-y-3">
                {data.agentforce.limitations.map((limit, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <span className="text-red-400 font-bold">✗</span>
                    <span className="text-gray-300">{limit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stat-card border-green-700 border-2">
              <h3 className="text-xl font-bold mb-4 text-green-400">✨ SalesLobster Advantages</h3>
              <ul className="space-y-3">
                {data.saleslobster.advantages.map((adv, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-gray-300">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="stat-card border-2 border-lobster text-center py-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Save ${(savings / months / 1000).toFixed(1)}k per month. Deploy in minutes.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="cta-button text-lg">
                  Start Free Trial →
                </button>
              </Link>
              <Link href="/features">
                <button className="cta-button-outline text-lg">
                  See All Features
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
