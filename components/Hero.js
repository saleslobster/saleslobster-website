import Link from 'next/link'

export default function Hero({ 
  title, 
  subtitle, 
  cta = true, 
  ctaText = 'Get Started Free',
  ctaLink = '/calculator',
  highlight = true
}) {
  return (
    <section className="relative overflow-hidden border-b border-gray-700 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center">
          <div className="text-6xl md:text-7xl mb-6">🦞</div>
          <h1 className="section-title mb-6">
            {highlight ? (
              <>
                {title.split(' vs ')[0]} vs{' '}
                <span className="gradient-text">
                  {title.split(' vs ')[1] || 'the competition'}
                </span>
              </>
            ) : (
              title
            )}
          </h1>
          <p className="section-subtitle max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          {cta && (
            <Link href={ctaLink}>
              <button className="cta-button text-lg px-10 py-4">
                {ctaText} →
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
