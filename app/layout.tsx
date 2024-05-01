import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer'
import Transition from './Transition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dato Cms App',
  description: 'Created By Giorgi Shubitidze'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Transition>
          <Navbar />
          {children}
          <Footer />
        </Transition>
      </body>
    </html>
  )
}
