import dynamic from 'next/dynamic'

const HomeContactForm = dynamic(() => import('./HomeContactForm'), {
  loading: () => (
    <div className="home-contact-form home-contact-form-skeleton" aria-hidden="true">
      <h3>Tell us what you want to grow</h3>
      <p>Loading contact form...</p>
    </div>
  ),
})

export default function HomeContactSection() {
  return <HomeContactForm />
}
