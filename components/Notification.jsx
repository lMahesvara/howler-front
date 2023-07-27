import React, { useState, useEffect } from 'react'
import { Icons } from '@/components/Icons'
import { getShortTime } from '@/lib/utils'
import { getUser } from '@/services/api'

const Notification = ({ notification, createdAt }) => {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await getUser(notification?.userFrom)
        setUserDetails(user)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserDetails()
  }, [notification?.userFrom])

  const notificationIcons = {
    like: <Icons.Heart className='fill-current text-[#f91880]' />,
    rehowl: <Icons.Repeat2 className='text-[#00b87a]' />,
    follow: <Icons.UserCheck className='fill-current text-[#2828ed]' />,
    reply: <Icons.MessageCircle className='fill-current text-[#1d9bf0]' />,
  }

  return (
    <article className='relative shrink-0 grow-0 overflow-hidden bg-black cursor-pointer border border-[#2f3336] flex hover:bg-[#eff3f41a] p-3 gap-4 w-full'>
      <div className='mr-2'>
        <div className='w-10 h-10'>
        {userDetails && (
            <img
              src={userDetails.image}
              alt={userDetails.name}
              className='w-[40px] h-[40px] transition-opacity duration-200 rounded-full hover:opacity-80'
            />
          )}
          <span className='absolute bottom-4 left-10' >{notificationIcons[notification.type]}</span>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-1'>
          {userDetails ? (
            <p className='font-bold text-[15px]'>{userDetails.name}</p>
          ) : (
            <p className='font-bold text-[15px]'>Loading...</p>
          )}
          {/* BODY (Notification data) */}
          <p className='text-[15px]'>{notification?.title}</p>
        </div>
        <div className='text-[15px] font-normal shrink text-[#71767b] leading-5 hover:underline whitespace-nowrap'>
          {getShortTime(new Date(createdAt))}
        </div>
      </div>
    </article>
  )
}

export default Notification
