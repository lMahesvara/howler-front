'use client'
import React, { useEffect } from 'react'
import { listMenu } from '../config/sidebar'
import NavLinks from '@/components/NavLinks'
import LittleUser from './LittleUser'
import { signOut, useSession } from 'next-auth/react'
import { useAuth } from '@/store/authStore'
import useSWR from 'swr'
import { getUser } from '@/services/api'
import { Icons, icons } from '@/components/Icons'

const Navbar = () => {
  const { data, status } = useSession()
  const user = data?.user
  const { setUser } = useAuth()

  const { data: dataUser } = useSWR(
    `/api/users/${user?._id ?? ''}`,
    () => getUser(user?._id ?? ''),
    { refreshInterval: 1000 }
  )

  useEffect(() => {
    if (dataUser) setUser(dataUser)

    if (status === 'unauthenticated') setUser(null)
  }, [dataUser, status])

  const logOut = () => {
    signOut({ callbackUrl: '/login' })
    setUser(null)
  }

  //if (status === 'loading') return null
  return (
    <header className='flex justify-center md:justify-end grow shrink min-w-[68px] sm:min-w-[88px] pt-5 px-2'>
      <div className='flex flex-col  max-w-[300] gap-4 bg-black items-center w-[68px] sm:w-[88px] xl:w-[275px] px-1 fixed xl:items-start'>
        <section className='flex flex-col gap-4 text-center'>
          <img
            src='/logo900x900.png'
            alt='logo-howler'
            className='w-[40px] ml-2'
          />
          {listMenu.map((item, index) => (
            <NavLinks key={index} {...item} />
          ))}
          <NavLinks
            href={`/${user?.username ?? ''}`}
            name='Profile'
            icon={<Icons.Profile />}
          />
          <button
            className='flex gap-2 text-[13px] items-center text-white hover:bg-[#eff3f41a] rounded-full p-3 w-fit'
            onClick={logOut}
          >
            <Icons.LogOut />
            <span className='hidden mr-4 xl:flex'>Log Out</span>
          </button>
        </section>
        <LittleUser />
      </div>
    </header>
  )
}

export default Navbar
