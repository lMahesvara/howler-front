'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/home')
  }, [])

  return null
}

export default Page
