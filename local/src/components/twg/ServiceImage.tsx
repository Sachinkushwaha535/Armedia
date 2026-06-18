import Image from 'next/image'

type ServiceImageProps = {
  src: string
  title: string
}

function ServiceImage({ src, title }: ServiceImageProps) {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-black/10 bg-[#f4f4f4]">
      <Image src={src} alt={title} fill className="object-cover" sizes="64px" />
    </div>
  )
}

export default ServiceImage
