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
  return (
    <Image
      className={className}
      src={logoPng}
      alt={title}
      priority={variant === 'mark'}
      sizes={variant === 'mark' ? '64px' : '160px'}
    />
  )
}

export default ArmediaLogo
