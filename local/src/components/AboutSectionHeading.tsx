type AboutSectionHeadingProps = {
  label?: string
  title: string
  titleAccent?: string
  subline?: string
}

function AboutSectionHeading({ label, title, titleAccent, subline }: AboutSectionHeadingProps) {
  return (
    <div className="about-section-heading">
      {label ? <p className="about-section-kicker">{label}</p> : null}
      <h2 className={`about-section-title${label ? '' : ' about-section-title--solo'}`}>
        {title}
        {titleAccent ? <span className="mt-2 block text-brand-gold">{titleAccent}</span> : null}
      </h2>
      {subline ? <p className="about-section-subline">{subline}</p> : null}
    </div>
  )
}

export default AboutSectionHeading
