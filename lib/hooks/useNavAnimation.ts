'use client'

import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const useNavAnimation = (length?: number) => {
  const { scrollY } = useScroll()
  const [gridNumValue, setGridNumValue] = useState(0)

  const isScrollingUp = Number(scrollY.getPrevious()) > scrollY.get()

  const menuHeight = useTransform(scrollY, [0, 400], ['150px', '90px'])
  const logoHeight = useTransform(scrollY, [0, 400], ['60%', '36.6%'])
  const contactButtonWidth = useTransform(scrollY, [0, 400], ['223px', '108px'])

  useMotionValueEvent(scrollY, 'change', () => {
    const newValue = Math.trunc(scrollY.get() / 50)
    if (newValue !== gridNumValue && newValue <= Number(length)) {
      setGridNumValue(newValue)
    }
  })

  //temporary fix for small issue.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const isFullyHorizontal = gridNumValue === length

  return {
    gridNumValue,
    isScrollingUp,
    menuHeight,
    logoHeight,
    contactButtonWidth,
    isFullyHorizontal,
    scrollY
  }
}

export default useNavAnimation
