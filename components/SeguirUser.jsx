'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getUser } from '@/services/api'

const SeguirUser = ({userId}) => {
  const [user, setUser] = useState(null)
  
  useEffect(()=>{
    const fetchUser = () => {
      getUser(userId).then((user) => {
        setUser(user)
      })
    }

    fetchUser()
  }, [userId])
  
  if (!user) return null

  return (
    <article className='relative shrink-0 grow-0 overflow-hidden bg-black cursor-pointer  border-[#2f3336] flex hover:bg-[#eff3f41a] rounded-full p-3 max-w-full w-full'>
      <div className='flex flex-col max-w-full w-full'>
        <div className='flex flex-row justify-between'>
          <div className='flex w-full xl:mr-3'>
            <div className='w-8 h-8 xl:w-10 xl:h-10 mr-1'>
              <img
                src={user.image}
                alt=''
                className='w-[30px] h-[30px] transition-opacity duration-200 rounded-full hover:opacity-80 xl:w-[40px] xl:h-[40px]'
              />
            </div>
            <div className='flex-col  max-w-[calc(100%-40px-1.5rem)] xl:flex'>
              <div className='flex flex-col'>
                <Link
                  className='text-[12px] font-bold text-[#e7e9ea] leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden xl:text-[15px]'
                  href='#'
                >
                  {user.name}
                </Link>
                <Link
                  className='text-[12px] font-normal shrink text-[#71767b] leading-5  whitespace-nowrap overflow-ellipsis overflow-hidden xl:text-[15px]'
                  href='#'
                >
                  @{user.username}
                </Link>
              </div>
            </div>
          </div>
          {/* #1d9bf01a */}
          <div className='flex items-center mr-3'>
          <button
              type='button'
              className='bg-white cursor-pointer w-16 h-7 rounded-full text-black text-[15px] disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#eff3f4] disabled:text-[#2f3336] transition-colors duration-200 hover:bg-gray-700 hover:text-white'
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SeguirUser
