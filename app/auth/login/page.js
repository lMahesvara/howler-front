'use client'
import React, { useEffect } from 'react'
import RegisterForm from '../../../components/RegisterForm'
import LoginForm from '../../../components/LoginForm'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { data, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/home')
    }
  }, [status])

  return (
    <div className='grow shrink'>
      <main className='flex flex-col-reverse w-screen h-screen min-h-screen overflow-x-hidden md:flex-row md:items-center grow shrink xl:overflow-hidden'>
        <section className='bg-none bg-no-repeat bg-cover w-[100%] h-screen flex flex-col justify-center items-center shrink grow md:w-[55%] md:bg-[url("/background-login.png")] s:mt-10 '>
          <img
            className='w-[500px] min-w-[300px] px-6 drop-shadow-2xl'
            src='/logo900x900.png'
            alt='logo-howler'
          />
        </section>

        <section className='pl-10 shrink grow'>
          <RegisterForm />
          <LoginForm />
        </section>
      </main>
    </div>
  )
}

export default Page
