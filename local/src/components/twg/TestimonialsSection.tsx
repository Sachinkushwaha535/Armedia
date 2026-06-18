import Link from 'next/link'
import { testimonials } from '../../data/homeContent'

function TestimonialsSection() {
  return (
    <section className="twg-section relative overflow-hidden border-t border-brand-line bg-black py-16 lg:py-24">
      <div className="twg-testimonial-bg absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-content gap-10 px-5 lg:grid-cols-2 lg:px-12 lg:items-center">
        <div>
          <p className="twg-kicker">{testimonials.kicker}</p>
          <div className="mt-4 border-t border-brand-line pt-8">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] italic text-white">{testimonials.title}</h2>
            <p className="mt-4 font-heading text-xl font-bold text-white">{testimonials.subtitle}</p>
            <blockquote className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted">
              “{testimonials.quote}”
              <footer className="mt-4 text-sm text-white/80">
                — {testimonials.author}, {testimonials.role}
              </footer>
            </blockquote>
            <Link href={testimonials.cta.href} className="twg-pill-btn twg-pill-btn-blue mt-8">
              <span className="twg-pill-dot bg-white" />
              {testimonials.cta.label}
            </Link>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/40">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
            aria-label="Play video"
          >
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
          </button>
          <span className="absolute bottom-4 left-4 font-heading text-xs uppercase tracking-[0.15em] text-white/70">
            Play video
          </span>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
