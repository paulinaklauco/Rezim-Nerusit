import type { Metadata } from 'next'
import { Jacquard_24, Poppins } from 'next/font/google'
import './globals.css'

const jacquard = Jacquard_24({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jacquard',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Režim Nerušit',
  description: 'Podcast Režim Nerušit — CzechCrunch',
  icons: {
    icon: '/images/emojis/hvezdicka1 1.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jacquard.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
