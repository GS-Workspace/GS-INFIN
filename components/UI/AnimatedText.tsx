'use client'

import { useRef } from 'react'
import { MotionSpan } from './FramerMotion'
import { useInView } from 'framer-motion'

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
  className
}: {
  text: string
  box?: keyof JSX.IntrinsicElements
  className?: string
}) => {
  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <span ref={description}>
        {text.split(' ').map((word, i) => (
          <span className="relative inline-flex overflow-hidden" key={i}>
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
