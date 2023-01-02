import NextImage from "next/image"

interface Props {
  className: string
  src: string
  alt: string
  priority?: boolean
}

export const Image = ({ className, src, alt, priority = false }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <NextImage
        layout="fill"
        objectFit="contain"
        src={src}
        alt={alt}
        priority={priority}
      />
    </div>
  )
}
