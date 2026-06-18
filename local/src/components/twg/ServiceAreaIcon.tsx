export type ServiceAreaIconKey =
  | 'strategy'
  | 'creative'
  | 'web'
  | 'design'
  | 'marketing'
  | 'insights'

type ServiceAreaIconProps = {
  variant: ServiceAreaIconKey
  className?: string
}

function ServiceAreaIcon({ variant, className = '' }: ServiceAreaIconProps) {
  return (
    <div
      className={['service-area-icon', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      {variant === 'strategy' ? <StrategyIcon /> : null}
      {variant === 'creative' ? <CreativeIcon /> : null}
      {variant === 'web' ? <WebIcon /> : null}
      {variant === 'design' ? <DesignIcon /> : null}
      {variant === 'marketing' ? <MarketingIcon /> : null}
      {variant === 'insights' ? <InsightsIcon /> : null}
    </div>
  )
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="12" x2="14" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <line x1="28" y1="12" x2="28" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <line x1="42" y1="12" x2="42" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <line x1="56" y1="12" x2="56" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <circle className="service-icon-dot service-icon-dot--a" cx="21" cy="28" r="3.5" fill="#c0392b" />
      <circle className="service-icon-dot service-icon-dot--b" cx="35" cy="38" r="3.5" fill="#c0392b" />
      <circle className="service-icon-dot service-icon-dot--c" cx="49" cy="22" r="3.5" fill="#c0392b" />
    </svg>
  )
}

function CreativeIcon() {
  return (
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        className="service-icon-ring service-icon-ring--outer"
        cx="40"
        cy="32"
        r="22"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        className="service-icon-ring service-icon-ring--inner"
        cx="40"
        cy="32"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="52" height="34" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="14" y1="24" x2="66" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="48" x2="40" y2="54" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="54" x2="50" y2="54" stroke="currentColor" strokeWidth="1.5" />
      <rect
        className="service-icon-cursor"
        x="22"
        y="30"
        width="8"
        height="1.5"
        fill="currentColor"
      />
    </svg>
  )
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="22" y1="14" x2="22" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <line x1="22" y1="14" x2="58" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <circle className="service-icon-dot service-icon-dot--a" cx="14" cy="22" r="3.5" fill="#c0392b" />
      <circle className="service-icon-dot service-icon-dot--b" cx="14" cy="34" r="3.5" fill="#c0392b" />
      <circle className="service-icon-dot service-icon-dot--c" cx="14" cy="46" r="3.5" fill="#c0392b" />
    </svg>
  )
}

function MarketingIcon() {
  return (
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="service-icon-wave service-icon-wave--a"
        d="M12 40 Q24 28 36 40 T60 40"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        className="service-icon-wave service-icon-wave--b"
        d="M12 48 Q28 34 44 48 T68 48"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle className="service-icon-dot service-icon-dot--a" cx="60" cy="40" r="3.5" fill="#c0392b" />
    </svg>
  )
}

function InsightsIcon() {
  return (
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="52" x2="68" y2="52" stroke="currentColor" strokeWidth="1.5" />
      <g className="service-icon-bar service-icon-bar--a">
        <line x1="20" y1="52" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g className="service-icon-bar service-icon-bar--b">
        <line x1="36" y1="52" x2="36" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g className="service-icon-bar service-icon-bar--c">
        <line x1="52" y1="52" x2="52" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <circle className="service-icon-dot service-icon-dot--b" cx="36" cy="20" r="3.5" fill="#c0392b" />
    </svg>
  )
}

export default ServiceAreaIcon
