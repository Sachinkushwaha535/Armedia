import dynamic from 'next/dynamic'

const HomeContactForm = dynamic(() => import('./HomeContactForm'), {
  loading: () => (
    <div className="space-y-4" aria-hidden="true">
      <h3 className="text-base font-semibold text-white">Tell us what you want to grow</h3>
      <p className="text-sm text-zinc-500">Loading contact form...</p>
    </div>
  ),
})

export default function HomeContactSection() {
  return <HomeContactForm />
}
