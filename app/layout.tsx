import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Transition from './Transition'
import { getNavData } from '@/datocms/actions/getNavData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dato Cms App',
  description: 'Created By Giorgi Shubitidze'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getNavData()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Transition>
          <Navbar data={data} />
          {children}
          <Footer />
        </Transition>
        <SpeedInsights />
      </body>
    </html>
  )
}
