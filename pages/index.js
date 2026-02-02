import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import { DollarSign, Zap, Clock, Users, Shield, Lightbulb, ArrowRight } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <DollarSign className="text-lobster" size={32} />,
      title: '95% Cost Savings',
      description: 'Replace Agentforce at a fraction of the cost. Keep spend predictable as you scale.'
    },
    {
      icon: <Zap className="text-lobster" size={32} />,
      title: 'Instant Setup',
      description: 'Deploy in minutes, not months. No lengthy implementations or complex configurations.'
    },
    {
      icon: <Clock className="text-lobster" size={32} />,
      title: 'Real-time Automation',
      description: 'Process meeting notes, generate Apex code, and brief meetings automatically.'
    },
    {
      icon: <Users className="text-lobster" size={32} />,
      title: 'Unlimited Scalability',
      description: 'Scale your automations without surprise pricing. Clear, predictable plans.'
    },
    {
      icon: <Shield className="text-lobster" size={32} />,
      title: 'Enterprise Security',
      description: 'Self-hosted option available. Full control over your data and compliance requirements.'
    },
    {
      icon: <Lightbulb className="text-lobster" size={32} />,
      title: 'Open & Extensible',
      description: 'Built on OpenClaw. Customize anything. Integrate with any tool you use.'
    },
  ]

  // Testimonials intentionally omitted until we have real, attributable customer quotes.

  const useCases = [
    {
      title: 'Meeting Notes Processing',
      description: 'Automatically transcribe, summarize, and log meeting notes to Salesforce.',
      icon: '📝',
      impact: '19 mins saved per SDR per day'
    },
    {
      title: 'Meeting Prep Briefing',
      description: 'AI-powered research briefs before every client meeting.',
      icon: '🎯',
      impact: '28 mins saved per SDR per day'
    },
    {
      title: 'Apex Code Generation',
      description: 'Generate, test, and deploy Salesforce Apex code automatically.',
      icon: '⚙️',
      impact: '1.5-3.5 hours saved per week'
    },
    {
      title: 'CRM Auto-Logging',
      description: 'All communications automatically logged to Salesforce in real-time.',
      icon: '📊',
      impact: '30 mins per day freed up'
    },
  ]

  const comparisonPoints = [
    { feature: 'Cost per SDR/month', saleslobster: '$15-150', agentforce: '$600-6,000' },
    { feature: 'Setup Time', saleslobster: 'Minutes', agentforce: 'Months' },
    { feature: 'Meeting Notes', saleslobster: '✓', agentforce: '✓' },
    { feature: 'Meeting Prep', saleslobster: '✓', agentforce: '✓' },
    { feature: 'Apex Deployment', saleslobster: '✓', agentforce: '✗' },
    { feature: 'Multi-channel Support', saleslobster: '✓', agentforce: '✗' },
    { feature: 'Self-hosted Option', saleslobster: '✓', agentforce: '✗' },
    { feature: 'Data Cloud Required', saleslobster: '✗', agentforce: '✓' },
  ]

  return (
    <>
      <Head>
        <title>SalesLobster - Replace Agentforce at 95% Savings</title>
        <meta name="description" content="SalesLobster automates Salesforce workflows at a fraction of the cost. Save 95% vs Agentforce." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SalesLobster - Replace Agentforce at 95% Savings" />
        <meta property="og:description" content="Automate Salesforce workflows. 95% cheaper than Agentforce." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Replace Agentforce at 95% Savings"
        subtitle="SalesLobster automates Salesforce workflows without enterprise bloat. Deploy in minutes and keep full control over your stack."
        ctaText="Calculate Your Savings"
        ctaLink="/calculator"
      />

      {/* Value Prop Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="section-title text-center mb-4">Why SalesLobster?</h2>
        <p className="section-subtitle text-center mb-16 max-w-2xl mx-auto">
          Purpose-built for Salesforce teams that want enterprise automation without enterprise pricing.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-4">What You Can Automate</h2>
        <p className="section-subtitle text-center mb-16 max-w-2xl mx-auto">
          Four key use cases that pay for SalesLobster 10x over within months.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="feature-card">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-gray-400 mb-4">{useCase.description}</p>
              <div className="text-lobster font-semibold text-sm">
                💰 {useCase.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="stat-card text-center py-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">See Your ROI (Without Guesswork)</h3>
          <p className="text-gray-400">Use the calculator to estimate savings based on your team size and workflow volume.</p>
        </div>

        <div className="text-center">
          <Link href="/calculator">
            <button className="cta-button text-lg">
              See Your Exact Savings →
            </button>
          </Link>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Head-to-Head Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 font-bold">Feature</th>
                <th className="text-center py-4 px-4 font-bold">
                  <span className="text-lobster">SalesLobster</span>
                </th>
                <th className="text-center py-4 px-4 font-bold text-red-400">Agentforce</th>
              </tr>
            </thead>
            <tbody>
              {comparisonPoints.map((point, idx) => (
                <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800/30 transition">
                  <td className="py-4 px-4">{point.feature}</td>
                  <td className="text-center py-4 px-4 text-green-400">{point.saleslobster}</td>
                  <td className="text-center py-4 px-4 text-red-400">{point.agentforce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials intentionally omitted until we have real, attributable customer quotes. */}

      {/* Dual CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="stat-card border-2 border-lobster text-center py-12">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
            <p className="text-gray-400 mb-6">
              See exactly how much you'll save by replacing Agentforce with SalesLobster.
            </p>
            <Link href="/calculator">
              <button className="cta-button w-full">
                Calculate Savings →
              </button>
            </Link>
          </div>

          <div className="stat-card border-2 border-lobster text-center py-12">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-4">Order Chat Demo</h3>
            <p className="text-gray-400 mb-6">
              Try our AI-powered order tracking chatbot demo (great example of a customer-facing Salesforce copilot).
            </p>
            <Link href="/order-chat">
              <button className="cta-button w-full">
                Try Order Chat →
              </button>
            </Link>
          </div>
        </div>

        <div className="stat-card text-center py-12">
          <h2 className="section-title mb-4">Ready to Try It?</h2>
          <p className="section-subtitle mb-8">
            See the ROI calculator and the Order Chat demo in action. If you like it, we’ll help you wire it into your org.
          </p>
          <Link href="/contact">
            <button className="cta-button text-lg">
              Talk to Us →
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
