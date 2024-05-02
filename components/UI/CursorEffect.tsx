'use client'

import useMousePosition from '@/lib/hooks/useMousePosition'
import { MotionDiv } from './FramerMotion'
import Plus from '../Icons/Plus'

const CursorEffect = () => {
  const { x, y } = useMousePosition()

  return (
    <MotionDiv
      className="absolute -z-50 grid grid-cols-6 grid-rows-6 gap-1"
      style={{
        x: Number(x) - 120,
        y: Number(y) - 250
      }}
      animate={{
        display: x && y ? 'grid' : 'none'
      }}
    >
      {[...Array(36)].map((_, i) => (
        <Plus key={i} />
      ))}
    </MotionDiv>
  )
}

export default CursorEffect
