'use client'
import { SessionProvider } from 'next-auth/react'
import { PrimeReactProvider } from 'primereact/api'

const SessionProviderLayout = ({ children }) => {
  return (
    <PrimeReactProvider>
      <SessionProvider basePath='/api/auth'>{children}</SessionProvider>
    </PrimeReactProvider>
  )
}

export default SessionProviderLayout
