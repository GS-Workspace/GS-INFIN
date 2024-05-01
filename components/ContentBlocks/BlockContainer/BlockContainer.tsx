'use client'

import { useRef, useState } from 'react'
import ContentBlocks from './ContentBlock'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { BlockContentType } from '@/data/data'

const BlockContainer = ({
  cardContents
}: {
  cardContents: BlockContentType[]
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref
  })
  const [isScrolledUp, setIsScrolledUp] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (latestProgress) => {
    if (latestProgress === 1) {
      setIsScrolledUp(true)
    } else if (latestProgress < 1) {
      setIsScrolledUp(false)
    }
  })

  return (
    <div ref={ref} className="flex flex-col">
      {cardContents.map((block, i) => (
        <ContentBlocks
          isScrolledUp={isScrolledUp}
          key={block.id}
          index={i}
          content={block}
        />
      ))}
      <ContentBlocks isScrolledUp={isScrolledUp} key="meow" index={777} />
    </div>
  )
}

export default BlockContainer
