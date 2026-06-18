import Link from 'next/link'
import { testimonials } from '../../data/homeContent'

function TestimonialsSection() {
  return (
    <section className="twg-section border-t border-black/15 bg-white py-16 text-black lg:py-24">
      <div className="mx-auto grid max-w-content gap-10 px-5 lg:grid-cols-2 lg:px-12 lg:items-center">
        <div>
          <p className="twg-kicker text-black/60">{testimonials.kicker}</p>
          <div className="mt-4 border-t border-black/15 pt-8">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] italic text-black">{testimonials.title}</h2>
            <p className="mt-4 font-heading text-xl font-bold text-black">{testimonials.subtitle}</p>
            <blockquote className="mt-6 max-w-xl text-base leading-relaxed text-black/75">
              “{testimonials.quote}”
              <footer className="mt-4 text-sm text-black/70">
                — {testimonials.author}, {testimonials.role}
              </footer>
            </blockquote>
            <Link href={testimonials.cta.href} className="twg-pill-btn twg-pill-btn-dark mt-8">
              <span className="twg-pill-dot bg-white" />
              {testimonials.cta.label}
            </Link>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg border border-black/10 bg-[#ececec]">
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/20 bg-white/80 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
            aria-label="Play video"
          >
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-black" />
          </button>
          <span className="absolute bottom-4 left-4 font-heading text-xs uppercase tracking-[0.15em] text-black/50">
            Play video
          </span>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
