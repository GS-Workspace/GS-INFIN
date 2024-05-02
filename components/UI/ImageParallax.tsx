import { MotionValue } from 'framer-motion'
import Image from 'next/image'
import { MotionDiv } from './FramerMotion'

const ImageParallax = ({
  src,
  alt,
  quality,
  scale
}: {
  src: string
  alt: string
  quality: number
  scale: MotionValue<number>
}) => {
  return (
    <div className="overflow-hidden rounded-[20px]">
      <MotionDiv
        style={{
          scale
        }}
      >
        <Image
          src={src}
          priority
          alt={alt}
          width={800}
          height={1200}
          quality={quality}
          className="max-h-[70vh]"
        />
      </MotionDiv>
    </div>
  )
}

export default ImageParallax
