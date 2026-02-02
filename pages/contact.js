import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send to a backend or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <Mail className="text-lobster" size={32} />,
      title: 'Email',
      description: 'hello@saleslobster.com',
      action: 'Send Email',
      href: 'mailto:hello@saleslobster.com'
    },
    {
      icon: <MessageSquare className="text-lobster" size={32} />,
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      action: 'Open Chat',
      href: '#'
    },
    {
      icon: <Phone className="text-lobster" size={32} />,
      title: 'Schedule a Call',
      description: 'Book a time with our sales team',
      action: 'Book Now',
      href: '#'
    },
  ]

  const faqItems = [
    {
      question: 'How much does SalesLobster cost?',
      answer: 'Pricing starts at $0 for small teams (up to 10 Salesforce users). Professional and Enterprise plans are custom based on your team size and feature needs. Most teams save 95% vs Agentforce.'
    },
    {
      question: 'How long does setup take?',
      answer: 'You can connect Salesforce and start your first automation in under 2 minutes. Most teams have their core automations running within hours, not months.'
    },
    {
      question: 'Can I self-host SalesLobster?',
      answer: 'Yes! Enterprise customers can deploy SalesLobster on their own infrastructure. We support Docker, Kubernetes, and on-premise installations.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use bank-grade encryption, are SOC 2 Type II certified, and HIPAA compliant. We never access or store your Salesforce data without permission.'
    },
    {
      question: 'What if we use Salesforce Professional Edition?',
      answer: 'SalesLobster works with all Salesforce editions: Essentials, Professional, Enterprise, and Unlimited. No Data Cloud required.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! You can try SalesLobster free for 30 days. No credit card required. You'll get access to all features.'
    },
  ]

  return (
    <>
      <Head>
        <title>Contact SalesLobster - Sales, Support & Partnerships</title>
        <meta name="description" content="Get in touch with the SalesLobster team. Sales inquiries, support, partnerships, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero */}
      <Hero
        title="Get in Touch"
        subtitle="Questions? Ready to save 95% on Salesforce automation? Our team is here to help."
        cta={false}
      />

      {/* Contact Methods */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => (
            <a key={idx} href={method.href} className="feature-card hover:border-lobster block">
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-400 mb-6">{method.description}</p>
              <button className="text-lobster font-semibold hover:underline">
                {method.action} →
              </button>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title mb-6">Send us a Message</h2>
            <p className="text-gray-400 mb-8">
              Fill out this form and our team will get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="stat-card border-2 border-green-600 bg-green-900/20 mb-6">
                <p className="text-green-400 font-semibold">✓ Message sent successfully!</p>
                <p className="text-gray-400 text-sm mt-2">Our team will be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                  className="w-full"
                />
              </div>

              <button type="submit" className="cta-button w-full">
                Send Message →
              </button>
            </form>
          </div>

          <div>
            <h2 className="section-title mb-6">What to Expect</h2>
            <div className="space-y-6">
              <div className="stat-card">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">📧</span> Quick Response
                </h3>
                <p className="text-gray-400">
                  Most inquiries get a response within 2 hours during business hours. We're fast!
                </p>
              </div>

              <div className="stat-card">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Custom Demo
                </h3>
                <p className="text-gray-400">
                  We'll show you exactly how SalesLobster can save your team money.
                </p>
              </div>

              <div className="stat-card">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🚀</span> Easy Onboarding
                </h3>
                <p className="text-gray-400">
                  Our team will help you get set up and running in minutes.
                </p>
              </div>

              <div className="stat-card">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">💬</span> Ongoing Support
                </h3>
                <p className="text-gray-400">
                  24/7 support team on Slack. Real humans. Real answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqItems.map((item, idx) => (
            <div key={idx} className="stat-card">
              <details className="group cursor-pointer">
                <summary className="font-bold text-lg flex items-center justify-between hover:text-lobster transition">
                  {item.question}
                  <span className="text-2xl group-open:rotate-180 transition">▸</span>
                </summary>
                <p className="text-gray-400 mt-4">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* Office Info */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Office Locations</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              city: 'San Francisco, CA',
              address: '123 Market Street',
              icon: '🌉'
            },
            {
              city: 'Austin, TX',
              address: '456 Congress Avenue',
              icon: '🤠'
            },
            {
              city: 'London, UK',
              address: '789 Thames Street',
              icon: '🇬🇧'
            },
          ].map((office, idx) => (
            <div key={idx} className="stat-card text-center">
              <div className="text-5xl mb-4">{office.icon}</div>
              <h3 className="font-bold text-lg mb-2">{office.city}</h3>
              <p className="text-gray-400">{office.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="stat-card border-2 border-lobster text-center py-16">
          <h2 className="section-title mb-4">Ready to Get Started?</h2>
          <p className="section-subtitle mb-8">
            See your exact savings with our ROI calculator.
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
