import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import OrderChat from '../components/OrderChat'
import { MessageSquare, Zap, Clock, BarChart3 } from 'lucide-react'
import { useState } from 'react'

export default function OrderChatPage() {
  const [demoMode, setDemoMode] = useState(true)

  const features = [
    {
      icon: <MessageSquare className="text-lobster" size={32} />,
      title: 'Instant Order Lookup',
      description: 'Customers enter their order number and get instant status updates.'
    },
    {
      icon: <Zap className="text-lobster" size={32} />,
      title: 'AI-Powered Responses',
      description: 'Natural language understanding powered by GPT-4. Ask anything about your order.'
    },
    {
      icon: <Clock className="text-lobster" size={32} />,
      title: '24/7 Availability',
      description: 'Available 24/7. No wait times. Customers get answers immediately.'
    },
    {
      icon: <BarChart3 className="text-lobster" size={32} />,
      title: 'Reduce Support Tickets',
      description: 'Handle 70% of order tracking questions automatically. Free up your team.'
    },
  ]

  const demoOrders = [
    { number: 'ORD-00001', status: 'Delivered', description: 'Fully delivered order with tracking' },
    { number: 'ORD-00002', status: 'Shipped', description: 'In transit with tracking number' },
    { number: 'ORD-00003', status: 'Processing', description: 'Processing order' },
    { number: 'ORD-00004', status: 'Draft', description: 'Draft/pending payment' },
  ]

  return (
    <>
      <Head>
        <title>Order Chat Demo - AI Order Tracking Assistant</title>
        <meta name="description" content="Interactive demo of SalesLobster's AI-powered order tracking chatbot. See how customers can track orders 24/7." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero */}
      <Hero
        title="Order Chat Demo"
        subtitle="AI-powered order tracking chatbot that handles customer inquiries 24/7. Reduces support tickets by 70%."
        cta={false}
      />

      {/* Demo Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="section-title text-center mb-4">Try It Live</h2>
        <p className="section-subtitle text-center mb-8 max-w-2xl mx-auto">
          Ask about an order below. Try "ORD-00001" or "12345" to see it in action.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="md:col-span-2">
            <div style={{ height: '500px' }}>
              <OrderChat />
            </div>
          </div>

          {/* Demo Info */}
          <div className="space-y-6">
            <div className="stat-card">
              <h3 className="font-bold mb-4">Demo Orders</h3>
              <p className="text-sm text-gray-400 mb-4">Try these order numbers:</p>
              <div className="space-y-2">
                {demoOrders.map((order, idx) => (
                  <div key={idx} className="bg-gray-700/50 rounded p-2 text-xs">
                    <p className="font-mono text-lobster">{order.number}</p>
                    <p className="text-gray-400">{order.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="stat-card bg-blue-900/20 border-blue-700">
              <h3 className="font-bold mb-2 text-blue-400">💡 Try These Messages</h3>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>"Where is order 1?"</li>
                <li>"When will ORD-00002 arrive?"</li>
                <li>"What's my tracking number?"</li>
                <li>"When was this ordered?"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Why Order Chat?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-4">How It Works</h2>
        <p className="section-subtitle text-center mb-12 max-w-2xl mx-auto">
          Order Chat integrates directly with Salesforce. Real-time data, no delays.
        </p>

        <div className="space-y-6">
          {[
            {
              num: '1',
              title: 'Customer Enters Order Number',
              description: 'Customer types "ORD-00001" or any order identifier into the chat.'
            },
            {
              num: '2',
              title: 'AI Looks Up Order in Salesforce',
              description: 'Our system instantly queries your Salesforce Order__c object with current data.'
            },
            {
              num: '3',
              title: 'GPT-4 Generates Smart Response',
              description: 'The order context is fed to GPT-4, which generates a natural, helpful response.'
            },
            {
              num: '4',
              title: 'Customer Gets Answer Instantly',
              description: 'Status, tracking number, ETA - all in plain English. No waiting. No menus.'
            },
          ].map((step, idx) => (
            <div key={idx} className="stat-card flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-lobster text-white font-bold">
                  {step.num}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Benefits for Your Team</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              emoji: '📈',
              title: 'Reduce Support Load',
              description: 'Handle 70% of order inquiries automatically, freeing your team for complex issues.',
              stat: '70%'
            },
            {
              emoji: '⚡',
              title: 'Instant Responses',
              description: '24/7 availability with sub-second response times. No business hours limits.',
              stat: '< 1s'
            },
            {
              emoji: '💰',
              title: 'Lower Costs',
              description: 'Save thousands per year in support costs while improving customer satisfaction.',
              stat: '95%'
            },
          ].map((benefit, idx) => (
            <div key={idx} className="stat-card text-center">
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{benefit.description}</p>
              <p className="text-3xl font-bold text-lobster">{benefit.stat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integration with ROI */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Pair with ROI Calculator</h2>
            <p className="text-gray-400 text-lg mb-6">
              Use our ROI calculator to see the exact cost savings from automating customer support with Order Chat.
            </p>
            <p className="text-gray-400 mb-8">
              Many teams report:
            </p>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-lobster">✓</span>
                <span>70-80% reduction in support ticket volume</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lobster">✓</span>
                <span>$50k-$200k annual savings in support costs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lobster">✓</span>
                <span>95% customer satisfaction on order tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lobster">✓</span>
                <span>Reduced chargebacks from customers finding their own tracking</span>
              </li>
            </ul>
            <Link href="/calculator">
              <button className="cta-button">
                Calculate Your Savings →
              </button>
            </Link>
          </div>

          <div className="stat-card border-2 border-lobster p-8">
            <h3 className="font-bold text-2xl mb-6 text-lobster">Typical Savings</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Current Support Cost</p>
                <p className="text-4xl font-bold">$150k/yr</p>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm mb-2">Order Chat Cost</p>
                <p className="text-4xl font-bold text-green-400">$5k/yr</p>
              </div>
              <div className="border-t border-gray-700 pt-6 bg-green-900/20 rounded p-4 border-green-700">
                <p className="text-gray-400 text-sm mb-2">Annual Savings</p>
                <p className="text-4xl font-bold text-green-400">$145k</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Info */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-4">Easy Salesforce Integration</h2>
        <p className="section-subtitle text-center mb-12 max-w-2xl mx-auto">
          Order Chat connects directly to your Salesforce Order__c object.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="stat-card">
            <h3 className="font-bold mb-4">What You Need</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-lobster">✓</span>
                <span>Salesforce org (Professional Edition or higher)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lobster">✓</span>
                <span>Order__c custom object with data</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lobster">✓</span>
                <span>Connected app credentials (we provide setup guide)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lobster">✓</span>
                <span>OpenAI API key (for GPT-4 responses)</span>
              </li>
            </ul>
          </div>

          <div className="stat-card bg-blue-900/20 border-blue-700">
            <h3 className="font-bold mb-4 text-blue-400">Setup Time</h3>
            <p className="text-6xl font-bold text-blue-400 mb-4">15 min</p>
            <p className="text-gray-400 text-sm">
              From clicking deploy to live chat. Includes connecting Salesforce and OpenAI.
            </p>
          </div>
        </div>

        <div className="stat-card">
          <h3 className="font-bold mb-4">Order__c Fields Used</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-lobster font-mono">Name</p>
              <p className="text-lobster font-mono">Status__c</p>
              <p className="text-lobster font-mono">Order_Date__c</p>
              <p className="text-lobster font-mono">Order_Total__c</p>
            </div>
            <div className="space-y-2">
              <p className="text-lobster font-mono">Tracking_Number__c</p>
              <p className="text-lobster font-mono">Estimated_Delivery__c</p>
              <p className="text-lobster font-mono">Shipping_Address__c</p>
              <p className="text-lobster font-mono">Items__c</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="stat-card border-2 border-lobster text-center py-16">
          <h2 className="section-title mb-4">Ready to Automate Support?</h2>
          <p className="section-subtitle mb-8">
            Deploy Order Chat to your Salesforce org in just 15 minutes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="cta-button text-lg">
                Get Started Free →
              </button>
            </Link>
            <Link href="/calculator">
              <button className="cta-button-outline text-lg">
                Calculate Savings
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
