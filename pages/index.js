import Head from 'next/head'
import Link from 'next/link'
import ROICalculator from '../components/ROICalculator'
import OrderChat from '../components/OrderChat'

export default function Home() {
  return (
    <>
      <Head>
        <title>SalesLobster - Replace Agentforce at a fraction of the cost</title>
        <meta
          name="description"
          content="SalesLobster is an OpenClaw-powered Salesforce automation agent. See the ROI calculator and try the Order Chat demo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation is rendered globally in pages/_app.js */}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-lobster/25 blur-3xl" />
          <div className="absolute top-20 left-10 h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute top-40 right-10 h-[360px] w-[360px] rounded-full bg-fuchsia-400/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/40 px-4 py-2 text-sm text-gray-300 mb-8">
              <span className="text-lobster font-bold">OpenClaw</span>
              <span className="text-gray-500">·</span>
              <span>Salesforce automation</span>
              <span className="text-gray-500">·</span>
              <span>Built for shipping</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Replace Agentforce.
              <span className="block gradient-text">Keep control. Cut spend.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SalesLobster is a focused Salesforce automation agent. Below you can (1) run an ROI estimate and (2) try a customer-facing Order Chat demo.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a className="cta-button text-lg" href="#roi">Calculate ROI →</a>
              <a className="cta-button-outline text-lg" href="#chat">Try Order Chat →</a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="stat-card">
                <div className="text-sm text-gray-400">Principle</div>
                <div className="text-lg font-bold">No made-up marketing</div>
                <div className="text-sm text-gray-500 mt-1">We'll add proof as we earn it.</div>
              </div>
              <div className="stat-card">
                <div className="text-sm text-gray-400">Architecture</div>
                <div className="text-lg font-bold">Composable agents</div>
                <div className="text-sm text-gray-500 mt-1">Automations that plug into your org.</div>
              </div>
              <div className="stat-card">
                <div className="text-sm text-gray-400">Delivery</div>
                <div className="text-lg font-bold">Ship in days</div>
                <div className="text-sm text-gray-500 mt-1">Not months of implementation.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-800">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">ROI Calculator</h2>
            <p className="text-gray-400 mt-2">
              A simple, transparent model. Adjust assumptions in code as we learn more.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Prefer a standalone page? <Link className="text-lobster hover:underline" href="/calculator">/calculator</Link>
          </div>
        </div>

        <ROICalculator />
      </section>

      {/* Order Chat */}
      <section id="chat" className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-800">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Order Chat Demo</h2>
            <p className="text-gray-400 mt-2">
              This is a real interactive chat UI backed by a real API endpoint. Once Salesforce credentials are configured on Railway, it queries real Order__c data (real-real).
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Prefer a standalone page? <Link className="text-lobster hover:underline" href="/order-chat">/order-chat</Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="stat-card">
            <h3 className="font-bold mb-3">Try it</h3>
            <p className="text-gray-400 text-sm mb-4">
              Type an order number like <span className="text-gray-200">ORD-00001</span>.
            </p>
            <div className="h-[520px]">
              <OrderChat />
            </div>
          </div>
          <div className="stat-card">
            <h3 className="font-bold mb-3">What this demo is (and isn't)</h3>
            <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
              <li><span className="font-semibold">Is:</span> a working chat UI + API route.</li>
              <li><span className="font-semibold">Is:</span> good for showing the product vibe and flow.</li>
              <li><span className="font-semibold">Is:</span> designed to query real Salesforce `Order__c` records via `/api/chat` when configured.</li>
              <li><span className="font-semibold">Needs:</span> Railway env vars (SF_USERNAME/SF_PASSWORD/SF_SECURITY_TOKEN) to enable real-real mode.</li>
            </ul>

            <div className="mt-6 p-4 rounded-lg border border-gray-700 bg-gray-900/40">
              <div className="text-sm text-gray-400">Roadmap (fast)</div>
              <div className="mt-2 text-sm text-gray-200">
                1) Connect to Salesforce demo org via SFDX token
                2) Replace mock orders with real `Order__c` query
                3) Add OpenAI responses (optional)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-800">
        <div className="stat-card text-center py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Want this in your org?</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Reply here with your org setup (sandbox vs prod) and the workflow you want automated first.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a className="cta-button" href="mailto:igor.kudryk@gmail.com">Email Igor</a>
            <a className="cta-button-outline" href="https://github.com/saleslobster/saleslobster-website" target="_blank" rel="noreferrer">
              View Source
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} SalesLobster. Built to replace Agentforce without the $2/conversation tax.
        </p>
      </section>
    </>
  )
}
