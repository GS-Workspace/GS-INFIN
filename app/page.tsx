'use client'

import BlockContainer from '@/components/ContentBlocks/BlockContainer/BlockContainer'
import InitialContentBlock from '@/components/ContentBlocks/InitialContentBlock'
import { cardContents } from '@/data/data'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <main>
      <div className="flex flex-col">
        <InitialContentBlock />
      </div>
      <BlockContainer cardContents={cardContents} />
    </main>
  )
}
