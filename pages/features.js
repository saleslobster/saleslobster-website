import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import { MessageSquare, Zap, Code, BarChart3, Shield, Zap as Zap2, Users, Layers, Lightbulb, Search, Webhook, GitBranch } from 'lucide-react'

export default function Features() {
  const features = [
    {
      name: 'Meeting Notes Processing',
      description: 'Automatically transcribe and summarize meeting recordings. Log everything to Salesforce in seconds.',
      icon: <MessageSquare className="text-lobster" size={32} />,
      details: [
        'Real-time transcription from Zoom, Teams, Google Meet',
        'AI-powered summarization',
        'Automatic Salesforce task/note creation',
        'Support for 50+ languages'
      ]
    },
    {
      name: 'Meeting Prep Briefing',
      description: 'Get AI-powered research briefs before every meeting. Know their history, industry trends, and talking points.',
      icon: <Search className="text-lobster" size={32} />,
      details: [
        'Automatic account research',
        'Historical interaction timeline',
        'Industry news and trends',
        'Personalized talking points'
      ]
    },
    {
      name: 'Apex Code Generation & Deployment',
      description: 'Generate, test, and deploy Salesforce Apex code automatically. No more manual Apex development.',
      icon: <Code className="text-lobster" size={32} />,
      details: [
        'Natural language to Apex code generation',
        'Automatic testing and validation',
        'One-click deployment to Salesforce',
        'Version control and rollback support'
      ]
    },
    {
      name: 'Real-time CRM Logging',
      description: 'Every email, call, chat, and interaction automatically logged to Salesforce. Zero manual data entry.',
      icon: <BarChart3 className="text-lobster" size={32} />,
      details: [
        'Email integration (Gmail, Outlook)',
        'Phone call logging from Twilio, RingCentral',
        'Slack, Teams, Discord chat logging',
        'SMS and WhatsApp integration'
      ]
    },
    {
      name: 'Security & Control',
      description: 'Designed to keep you in control. Self-host options and clear data boundaries.',
      icon: <Shield className="text-lobster" size={32} />,
      details: [
        'Encryption in transit (TLS)',
        'Principle-of-least-privilege integrations',
        'Self-hosted deployment options',
        'Clear separation between your data and LLM providers'
      ]
    },
    {
      name: 'Custom Webhooks & APIs',
      description: 'Build custom automations with our REST API. Integrate with any tool you use.',
      icon: <Webhook className="text-lobster" size={32} />,
      details: [
        'REST API for custom integrations',
        'Webhook support for event-driven workflows',
        'Pre-built connectors for 100+ tools',
        'OpenClaw framework for deep customization'
      ]
    },
  ]

  const capabilities = [
    {
      title: 'Multi-Channel Support',
      description: 'Not just Salesforce. Integrate with Slack, Teams, Discord, email, and more.',
      icon: '🌐'
    },
    {
      title: 'No Lock-in',
      description: 'Open architecture. Export your data anytime. Run on your own servers if you want.',
      icon: '🔓'
    },
    {
      title: 'Pay Per Use',
      description: 'No seat licenses. No Data Cloud tax. Pay for what you use, nothing more.',
      icon: '💳'
    },
    {
      title: 'Lightning Fast Setup',
      description: 'Connect Salesforce quickly. Start automating in hours, not months.',
      icon: '⚡'
    },
    {
      title: 'Full Customization',
      description: 'Built on OpenClaw. Customize every single automation to match your workflows.',
      icon: '🎨'
    },
    {
      title: '24/7 Support',
      description: 'Real humans on Slack. Technical support team with Salesforce expertise.',
      icon: '🤝'
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$0',
      description: 'For small teams',
      features: [
        'Up to 10 Salesforce users',
        'Basic meeting notes processing',
        'Email integration',
        'Community support',
      ]
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'For growing teams',
      highlight: true,
      features: [
        'Unlimited Salesforce users',
        'All automations included',
        'Multi-channel integrations',
        'API access',
        'Priority support',
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Self-hosted option',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantees',
      ]
    },
  ]

  return (
    <>
      <Head>
        <title>SalesLobster Features - Full Salesforce Automation Suite</title>
        <meta name="description" content="Meeting notes, Apex code generation, CRM logging, and more. All included. 95% cheaper than Agentforce." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero */}
      <Hero
        title="Powerful Features for Modern Sales Teams"
        subtitle="Everything you need to automate Salesforce workflows. Includes ROI calculator, order chat, and more. All included in one platform."
        cta={false}
      />

      {/* Main Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.name}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {feature.details.map((detail, didx) => (
                  <li key={didx} className="flex items-start gap-2">
                    <span className="text-lobster mt-1">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Why Teams Choose SalesLobster</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="stat-card">
              <div className="text-4xl mb-4">{cap.icon}</div>
              <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
              <p className="text-gray-400">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-4">Feature Comparison</h2>
        <p className="section-subtitle text-center mb-12">See what sets SalesLobster apart</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 font-bold">Feature</th>
                <th className="text-center py-4 px-4 font-bold">
                  <span className="text-lobster">SalesLobster</span>
                </th>
                <th className="text-center py-4 px-4 font-bold text-red-400">Agentforce</th>
                <th className="text-center py-4 px-4 font-bold text-gray-400">Manual</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Meeting Notes Processing', sl: '✓', agentforce: '✓', manual: '✓' },
                { feature: 'Meeting Prep Briefing', sl: '✓', agentforce: '✓', manual: '✗' },
                { feature: 'Apex Code Generation', sl: '✓', agentforce: '✗', manual: '✓' },
                { feature: 'Apex Deployment Automation', sl: '✓', agentforce: '✗', manual: '✗' },
                { feature: 'Email Logging', sl: '✓', agentforce: '✗', manual: '✓' },
                { feature: 'Slack Integration', sl: '✓', agentforce: '✗', manual: '✗' },
                { feature: 'Teams Integration', sl: '✓', agentforce: '✗', manual: '✗' },
                { feature: 'Custom Webhooks', sl: '✓', agentforce: '✗', manual: '✗' },
                { feature: 'Self-Hosted Option', sl: '✓', agentforce: '✗', manual: 'N/A' },
                { feature: 'Data Cloud Required', sl: '✗', agentforce: '✓', manual: 'N/A' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800/30 transition">
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="text-center py-4 px-4 text-green-400 font-bold">{row.sl}</td>
                  <td className="text-center py-4 px-4 text-red-400 font-bold">{row.agentforce}</td>
                  <td className="text-center py-4 px-4 text-gray-400">{row.manual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-4">Simple Pricing</h2>
        <p className="section-subtitle text-center mb-16">All tiers include full feature access. No hidden costs.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`feature-card ${tier.highlight ? 'border-2 border-lobster scale-105' : ''}`}
            >
              {tier.highlight && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lobster px-4 py-1 rounded-full text-white text-sm font-bold">Most Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <button className={tier.highlight ? 'cta-button w-full mb-6' : 'cta-button-outline w-full mb-6'}>
                Get Started
              </button>
              <ul className="space-y-3">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2 text-sm">
                    <span className="text-lobster mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="stat-card text-center">
          <h3 className="text-xl font-bold mb-4">Questions about pricing?</h3>
          <p className="text-gray-400 mb-6">Chat with our team for custom enterprise pricing and licensing options.</p>
          <Link href="/contact">
            <button className="cta-button">
              Talk to Sales →
            </button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="stat-card border-2 border-lobster text-center py-16">
          <h2 className="section-title mb-4">Ready to Automate?</h2>
          <p className="section-subtitle mb-8">
            See how much you'll save with our ROI calculator.
          </p>
          <Link href="/calculator">
            <button className="cta-button text-lg">
              Calculate Savings →
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
