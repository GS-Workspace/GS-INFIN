'use client'

import { useRef } from 'react'
import { MotionSpan } from './FramerMotion'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

export const slideUp = {
  initial: {
    y: '100%'
  },

  open: (i: number) => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.01 * i }
  }),

  closed: {
    y: '100%',
    transition: { duration: 0.5 }
  }
}

const AnimatedText = ({
  text,
  box: Wrapper = 'p',
  className,
  isHero
}: {
  text: string
  box?: keyof JSX.IntrinsicElements
  className?: string
  isHero?: boolean
}) => {
  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <Wrapper className={cn(className)}>
      <span className="sr-only">{text}</span>
      <span ref={description}>
        {text.split(' ').map((word, i) => (
          <span
            className={cn('relative inline-flex overflow-hidden', {
              'bg-background bg-opacity-100': isHero
            })}
            key={i}
          >
            <MotionSpan
              variants={slideUp}
              custom={i}
              initial="closed"
              animate={isInView ? 'open' : 'closed'}
              key={i}
            >
              {word}
            </MotionSpan>
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    </Wrapper>
  )
}

export default AnimatedText
