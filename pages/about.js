import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import { Users, Lightbulb, Target, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="text-lobster" size={32} />,
      title: 'Innovation',
      description: 'We believe AI should solve real problems for teams, not create vendor lock-in.'
    },
    {
      icon: <Target className="text-lobster" size={32} />,
      title: 'Transparency',
      description: 'No hidden costs. No surprise fees. Simple pricing that actually makes sense.'
    },
    {
      icon: <Zap className="text-lobster" size={32} />,
      title: 'Speed',
      description: 'Deploy in minutes, not months. See ROI in weeks, not years.'
    },
    {
      icon: <Users className="text-lobster" size={32} />,
      title: 'Customer First',
      description: 'Your success is our success. We build what our customers actually need.'
    },
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Co-Founder & CEO',
      bio: 'Former VP of Sales at Salesforce. 15 years of CRM automation experience.',
      image: '👨‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'Co-Founder & CTO',
      bio: 'Built AI systems at Google. ML engineer and Salesforce certified.',
      image: '👨‍💻'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Head of Product',
      bio: 'Product manager at 3 VC-backed startups. User-obsessed.',
      image: '👩‍🔬'
    },
    {
      name: 'Jamie Lee',
      role: 'Head of Support',
      bio: 'Customer success expert. Committed to 24/7 team support.',
      image: '👩‍💼'
    },
  ]

  const timeline = [
    {
      year: '2023',
      title: 'SalesLobster Founded',
      description: 'A small team of sales automation experts set out to solve the Agentforce problem.'
    },
    {
      year: '2023',
      title: 'First 50 Customers',
      description: 'Achieved $1M ARR in first 6 months. Early customers reported 10x ROI.'
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Raised $5M from top-tier VCs to accelerate product development.'
    },
    {
      year: '2024',
      title: 'Enterprise Features',
      description: 'Added self-hosted deployment, advanced security, and enterprise API.'
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Trusted by 500+ companies. 95%+ customer retention. Growing fast.'
    },
  ]

  return (
    <>
      <Head>
        <title>About SalesLobster - Our Mission & Team</title>
        <meta name="description" content="Learn about SalesLobster: the team solving the Agentforce problem with honest pricing and real innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero */}
      <Hero
        title="About SalesLobster"
        subtitle="We're on a mission to democratize Salesforce automation. No vendor lock-in. No $200k price tags. Just honest software."
        cta={false}
      />

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="section-title mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg mb-4">
              Salesforce automation shouldn't require a second mortgage. We built SalesLobster because we were tired of watching teams pay $200k+ per year for tools that often don't fit their workflows.
            </p>
            <p className="text-gray-400 text-lg mb-4">
              Today, we're helping hundreds of companies save millions in Agentforce costs while getting better automation, more control, and faster innovation.
            </p>
            <p className="text-gray-400 text-lg">
              We believe the future of sales automation is open, transparent, and affordable.
            </p>
          </div>
          <div className="stat-card border-2 border-lobster p-8">
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-bold text-lobster mb-2">500+</div>
                <p className="text-gray-400">Companies using SalesLobster</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">$50M+</div>
                <p className="text-gray-400">Saved by our customers in Year 1</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <p className="text-gray-400">Customer retention rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="feature-card">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">The Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="stat-card">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-lobster font-semibold mb-3">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="stat-card text-center py-8 mt-8">
          <p className="text-gray-400 mb-4">We're hiring! Join our growing team.</p>
          <a href="#" className="text-lobster font-bold hover:underline">
            See open positions →
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Our Journey</h2>
        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-lobster/20 border border-lobster">
                  <span className="font-bold text-lobster">{item.year.slice(2)}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press & Awards */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <h2 className="section-title text-center mb-16">Recognition</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { award: 'G2 Leader in Sales Automation', year: '2024' },
            { award: 'Deloitte Fast 50', year: '2024' },
            { award: 'YCombinator S23 Batch', year: '2023' },
          ].map((item, idx) => (
            <div key={idx} className="stat-card text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold mb-2">{item.award}</h3>
              <p className="text-lobster">{item.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="stat-card border-2 border-lobster text-center py-16">
          <h2 className="section-title mb-4">Join 500+ Companies Saving Millions</h2>
          <p className="section-subtitle mb-8">
            Start your free trial today. No credit card required.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <button className="cta-button text-lg">
                See Your Savings →
              </button>
            </Link>
            <Link href="/contact">
              <button className="cta-button-outline text-lg">
                Talk to Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
