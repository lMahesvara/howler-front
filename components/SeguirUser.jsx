'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getUser } from '@/services/api'
import { useAuth } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import FollowButton from './FollowButton'

const SeguirUser = ({ userId }) => {
  const { user: loggedUser } = useAuth()
  const router = useRouter()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = () => {
      getUser(userId).then(user => {
        setUser(user)
      })
    }

    fetchUser()
  }, [userId])

  if (!user) return null

  return (
    <article
      className='relative shrink-0 grow-0 overflow-hidden bg-black cursor-pointer  border-[#2f3336] flex hover:bg-[#eff3f41a] rounded-full p-3 max-w-full w-full'
      onClick={() => router.push(`/${user?.username}`)}
    >
      <div className='flex flex-col w-full max-w-full'>
        <div className='flex flex-row justify-between max-w-full'>
          <div className='flex w-full xl:mr-3 max-w-[calc(100%-40px-2rem-50px)]'>
            <Link className='mr-3' href={`/${user?.username}`}>
              <img
                src={user.image}
                alt=''
                className='w-[40px] h-[40px] transition-opacity duration-200 rounded-full hover:opacity-80'
              />
            </Link>
            <div className='flex-col  max-w-[calc(100%-40px-.75rem)] xl:flex'>
              <div className='flex flex-col'>
                <Link
                  className='font-bold text-[#e7e9ea] leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden text-[15px]'
                  href={`/${user?.username}`}
                >
                  {user.name}
                </Link>
                <Link
                  className='font-normal shrink text-[#71767b] leading-5  whitespace-nowrap overflow-ellipsis overflow-hidden text-[15px]'
                  href={`/${user?.username}`}
                >
                  @{user.username}
                </Link>
              </div>
            </div>
          </div>
          {/* #1d9bf01a */}
          {user?._id === loggedUser?._id ? null : (
            <div className='flex items-center'>
              <FollowButton user={user} />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default SeguirUser
