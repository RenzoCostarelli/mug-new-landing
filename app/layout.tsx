import './styles/globals.scss'
import { Inter } from 'next/font/google'
import Lenis from '@studio-freight/lenis'
import { LenisScroller } from './lenis-scroller'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MUG',
  description: 'MUG rosario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <LenisScroller />
    </html>
  )
}
