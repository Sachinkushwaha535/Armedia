type ArmediaLogoProps = {
  className?: string
  title?: string
  variant?: 'mark' | 'lockup'
}

function ArmediaLogo({
  className = 'armedia-logo',
  title = 'Armedia logo',
  variant = 'lockup',
}: ArmediaLogoProps) {
  const titleId = `${className.replace(/\s+/g, '-')}-title`
  const isMark = variant === 'mark'

  return (
    <svg
      className={className}
      viewBox={isMark ? '44 24 254 260' : '0 0 340 400'}
      role="img"
      aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>
      <defs>
        <linearGradient id={`${titleId}-lime`} x1="68" y1="238" x2="234" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DBA15" />
          <stop offset=".48" stopColor="#B8F600" />
          <stop offset="1" stopColor="#D7FF28" />
        </linearGradient>
        <linearGradient id={`${titleId}-darklime`} x1="208" y1="250" x2="285" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8AD915" />
          <stop offset=".55" stopColor="#A9EF18" />
          <stop offset="1" stopColor="#5F8F18" />
        </linearGradient>
        <filter id={`${titleId}-glow`} x="-16%" y="-16%" width="132%" height="132%">
          <feGaussianBlur stdDeviation="2.6" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0.6 0 0 0 0.38 0 0.9 0 0 0.86 0 0 0.02 0 0 0 0 0 0.5 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#${titleId}-glow)`}>
        <path
          d="M171 38 64 241 94 268 171 174 247 268 279 241 171 38Z"
          fill={`url(#${titleId}-lime)`}
        />
        <path d="M171 38 171 174 213 147 184 69Z" fill="#D6FF25" opacity=".88" />
        <path d="M184 69 213 147 279 241 247 268 171 174Z" fill={`url(#${titleId}-darklime)`} />
        <path d="M171 38 64 241 146 187 171 174Z" fill="#A8EB19" opacity=".92" />
        <path d="M64 241 94 268 171 174 146 187Z" fill="#8BCC17" />
        <path d="M94 268 171 174 247 268 199 216Z" fill="#B7F615" />

        <path
          d="M171 38 171 174M64 241 146 187 171 174 213 147 279 241M94 268 171 174 247 268M184 69 213 147"
          fill="none"
          stroke="#11160E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.5"
          opacity=".86"
        />
        <path
          d="M171 38 64 241 94 268 171 174 247 268 279 241 171 38Z"
          fill="none"
          stroke="#BFFF18"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity=".45"
        />
      </g>

      {!isMark && (
        <>
          <text
            x="170"
            y="330"
            fill="#F7F7F7"
            fontFamily="Arial Black, Arial, Helvetica, sans-serif"
            fontSize="54"
            fontWeight="900"
            letterSpacing="3"
            textAnchor="middle"
          >
            ARMEDIA
          </text>
          <text
            x="170"
            y="374"
            fill="#B9ED40"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="26"
            fontWeight="700"
            letterSpacing="5"
            textAnchor="middle"
          >
            DIGITAL STUDIO
          </text>
        </>
      )}
    </svg>
  )
}

export default ArmediaLogo
