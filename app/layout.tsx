import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './global.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shiv - Personal Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  icons: {
    icon: '/assets/images/logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        {/* Add iOS format detection meta tag to prevent automatic link conversion */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body 
        className={poppins.className} 
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
