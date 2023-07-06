import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import PageLayout from '@/components/PageLayout'
import { Toaster } from "@/components/Toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + ` flex min-h-screen`}>
        {/* <Navbar /> */}
        {children}
        <Toaster />
      </body>
    </html>
  )
}
