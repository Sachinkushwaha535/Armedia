import Image from 'next/image'
import logoPng from '../logo/logo.png'

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
  const size = variant === 'mark' ? 44 : 160

  return (
    <Image
      className={className}
      src={logoPng}
      alt={title}
      width={size}
      height={size}
      priority={variant === 'mark'}
      sizes={variant === 'mark' ? '44px' : '160px'}
    />
  )
}

export default ArmediaLogo
