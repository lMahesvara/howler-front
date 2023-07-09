import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/Toaster'
import Session from '@/components/Session'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Howler - Home',
  description: 'Home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + ` flex min-h-screen`}>
        <Session>{children}</Session>
        <Toaster />
      </body>
    </html>
  )
}
