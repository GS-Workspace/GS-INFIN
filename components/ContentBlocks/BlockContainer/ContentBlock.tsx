'use client'

import { BlockContentType } from '@/data/data'
import BusinessBlock from '../BusinessBlock'
import { useRef } from 'react'
import { MotionValue, useInView, useScroll, useTransform } from 'framer-motion'
import { MotionDiv } from '../../UI/FramerMotion'
import { cn, formatNumber } from '@/lib/utils'
import ObjectiveBlock from '../ObjectiveBlock'
import DemoBlock from '../DemoBlock'

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
    default:
      return null
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
    amount: 0.4
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
          bottom: isFixed ? `calc(-61% - ${35 * index}px)` : undefined,
          position: isFixed ? 'fixed' : 'relative'
        }}
        transition={{
          duration: 0.1
        }}
        layout="preserve-aspect"
        className={cn('relative h-[76%] w-full rounded-2xl', {
          'w-[calc(100%-24px)]': isFixed
        })}
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
