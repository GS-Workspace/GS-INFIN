import { BlockContentType } from '@/data/data'
import { useRef } from 'react'
import { MotionValue, useInView, useScroll, useTransform } from 'framer-motion'
import { MotionDiv } from '../../UI/FramerMotion'
import { cn, formatNumber } from '@/lib/utils'
import dynamic from 'next/dynamic'

const BusinessBlock = dynamic(() => import('../BusinessBlock'))
const ObjectiveBlock = dynamic(() => import('../ObjectiveBlock'))
const DemoBlock = dynamic(() => import('../DemoBlock'))

const BlockComponent = ({
  content,
  index,
  scale
}: {
  content?: BlockContentType
  index: number
  scale: MotionValue<number>
}) => {
  if (!content) return null

  switch (content.type) {
    case 'default':
      return <BusinessBlock index={index} scale={scale} content={content} />
    case 'objective':
      return <ObjectiveBlock index={index} content={content} />
    case 'demo':
      return <DemoBlock index={index} content={content} />
  }
}

const ContentBlocks = ({
  content,
  index,
  isScrolledUp
}: {
  content?: BlockContentType
  index: number
  isScrolledUp: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, {
    amount: 0.6
  })
  const isFixed = !inView && !isScrolledUp
  const formattedNumber = formatNumber(index + 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  })
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <MotionDiv
      ref={containerRef}
      className="sticky -top-[5px] mb-[300px] flex h-screen w-full flex-col items-center justify-center px-3 last:mb-0"
    >
      <MotionDiv
        id={`block-${index}`}
        style={{
          backgroundColor: content?.color,
          height: isFixed ? `calc(140px - ${35 * index}px)` : '',
          position: isFixed ? 'fixed' : 'relative'
        }}
        transition={{
          duration: 0.1
        }}
        layout
        className={cn(
          'relative w-full overflow-hidden rounded-2xl md:h-[60%] lg:h-[70%] xl:h-[76%]',
          {
            'bottom-0 w-[calc(100%-24px)] rounded-b-none': isFixed,
            'min-h-[500px]': !isFixed
          }
        )}
      >
        {isFixed && (
          <div
            className="flex w-full items-center justify-between px-4 py-[5px]"
            style={{
              color: content?.textColor
            }}
          >
            <span className="text-sm font-medium">{formattedNumber}</span>
            <span className="text-xs font-medium uppercase">
              {content?.shortTitle}
            </span>
          </div>
        )}
        {!isFixed && (
          <BlockComponent scale={scale} index={index} content={content} />
        )}
      </MotionDiv>
    </MotionDiv>
  )
}

export default ContentBlocks
