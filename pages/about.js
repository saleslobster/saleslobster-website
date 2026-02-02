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
      title: 'Early Pilots',
      description: 'Proved the core workflows: notes → CRM, meeting prep, and code automation.'
    },
    {
      year: '2024',
      title: 'Hardening & Integrations',
      description: 'Improved reliability and expanded integrations across channels.'
    },
    {
      year: '2024',
      title: 'Enterprise Features',
      description: 'Added self-hosted deployment, advanced security, and enterprise API.'
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Focused on shipping practical automation that teams can deploy fast and control fully.'
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
              Salesforce automation shouldn’t come with enterprise bloat or vague pricing. SalesLobster exists to ship practical automations you can deploy quickly, understand, and control.
            </p>
            <p className="text-gray-400 text-lg mb-4">
              We focus on real workflows (notes → CRM, meeting prep, code automation, customer support copilots) and make them available without lock-in.
            </p>
            <p className="text-gray-400 text-lg">
              The future of sales automation is open, transparent, and affordable.
            </p>
          </div>
          <div className="stat-card border-2 border-lobster p-8">
            <div className="space-y-6">
              <div>
                <div className="text-xl font-bold text-lobster mb-2">Built for Shipping</div>
                <p className="text-gray-400">Small, composable tools that solve specific pain points.</p>
              </div>
              <div>
                <div className="text-xl font-bold text-lobster mb-2">No Lock-in</div>
                <p className="text-gray-400">Self-host options, clear boundaries, and extensible integrations.</p>
              </div>
              <div>
                <div className="text-xl font-bold text-lobster mb-2">Truthful Marketing</div>
                <p className="text-gray-400">No made-up stats. We’ll add proof as we earn it.</p>
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

      {/* Recognition intentionally omitted until we have real, verifiable awards/press mentions. */}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-700">
        <div className="stat-card border-2 border-lobster text-center py-16">
          <h2 className="section-title mb-4">Try SalesLobster</h2>
          <p className="section-subtitle mb-8">
            Explore the calculator and demos. If you want help integrating with your org, reach out.
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
