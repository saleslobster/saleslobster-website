import Head from 'next/head'
import Link from 'next/link'
import ROICalculator from '../components/ROICalculator'

export default function ROICalculatorPage() {
  return (
    <>
      <Head>
        <title>ROI Calculator | SalesLobster</title>
        <meta name="description" content="Estimate your ROI replacing Agentforce with SalesLobster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <h1 className="text-4xl font-extrabold">ROI Calculator</h1>
            <p className="text-gray-400 mt-2">Standalone view. Same calculator as the landing page.</p>
          </div>
          <Link className="text-lobster hover:underline" href="/">← Back to landing</Link>
        </div>

        <ROICalculator />
      </main>
    </>
  )
}
