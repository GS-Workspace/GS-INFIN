import { cn } from '@/lib/utils'
import { MotionValue } from 'framer-motion'
import Image from 'next/image'
import { MotionDiv } from './FramerMotion'

const ImageParallax = ({
  src,
  alt,
  quality,
  fill,
  className,
  scale,
  ...rest
}: {
  src: string
  alt: string
  quality: number
  fill: boolean
  className: string
  scale: MotionValue<number>
}) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-[20px]">
      <MotionDiv
        className="h-full w-full"
        style={{
          scale
        }}
      >
        <Image
          {...rest}
          src={src}
          priority
          alt={alt}
          fill={fill}
          quality={quality}
          className={cn(className)}
        />
      </MotionDiv>
    </div>
  )
}

export default ImageParallax
