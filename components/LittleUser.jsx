'use client'
import Link from 'next/link'
import React from 'react'
import { useAuth } from '@/store/authStore'

const LittleUser = () => {
  const { user } = useAuth()

  if (!user) return null

  console.log(user)

  return (
    <article className='relative shrink-0 grow-0 overflow-hidden bg-black cursor-pointer  border-[#2f3336] flex hover:bg-[#eff3f41a] rounded-full p-3 max-w-full xl:w-full'>
      <div className='flex flex-col items-center w-full max-w-full xl:items-start'>
        <div className='flex flex-row justify-center w-full xl:justify-start'>
          <div className='xl:mr-3'>
            <div className='w-10 h-10'>
              <img
                src={user.image}
                alt='user'
                className='w-[40px] h-[40px] transition-opacity duration-200 rounded-full hover:opacity-80'
              />
            </div>
          </div>
          <div className='flex-col hidden max-w-[calc(100%-40px-1.5rem)] xl:flex'>
            <div className='flex flex-col'>
              <Link
                className='text-[15px] font-bold text-[#e7e9ea] leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden'
                href='#'
              >
                {user.name}
              </Link>
              <Link
                className='text-[15px] font-normal shrink text-[#71767b] leading-5  whitespace-nowrap overflow-ellipsis overflow-hidden '
                href='#'
              >
                @{user.username}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default LittleUser
