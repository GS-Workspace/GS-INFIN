'use client'

import InitialLogo from '@/components/Icons/InitialLogo'
import { MotionDiv } from '@/components/UI/FramerMotion'
import {
  Variants,
  useMotionValueEvent,
  useTime,
  useTransform
} from 'framer-motion'
import { useState } from 'react'

const variants: Variants = {
  initial: {
    opacity: 1
  },
  animate: { top: '-100%', opacity: 0 }
}

const Transition = ({ children }: { children: React.ReactNode }) => {
  const time = useTime()
  const animationTime = useTransform(time, [0, 3100], [0, 4])
  const [key, setKey] = useState('initialKey')
  useMotionValueEvent(animationTime, 'change', (latest) => {
    if (latest === 4) {
      setKey('newKey')
    }
  })

  return (
    <div>
      <MotionDiv
        transition={{
          duration: 1,
          delay: 3,
          ease: [0.83, 0, 0.17, 1]
        }}
        animate="animate"
        initial="initial"
        variants={variants}
        className="fixed bottom-0 left-0 right-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-black"
      >
        <InitialLogo />
      </MotionDiv>
      <div key={key}>{children}</div>
    </div>
  )
}

export default Transition
