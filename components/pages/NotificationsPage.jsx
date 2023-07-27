'use client'
import React, { useState, useEffect } from 'react'
import PageLayout from '@/components/PageLayout'
import Notification from '@/components/Notification'
import { useAuth } from '@/store/authStore'
import { getNotifications } from '@/services/api'

const NotificationsPage = () => {
  const { user: loggedUser } = useAuth()
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    if (loggedUser) {
      const fetchNotifications = async () => {
        try {
          const data = await getNotifications(loggedUser._id)
          setNotifications(data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchNotifications()
    }
  }, [loggedUser])

  return (
    <PageLayout.Container>
      <PageLayout.Header>
        <div className='flex flex-col items-start justify-center flex-grow'>
          <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
            Notifications
          </PageLayout.HeaderTitle>
        </div>
      </PageLayout.Header>
      <section className='w-full'>
        {notifications.map(notification => (
          <Notification
            key={notification._id} 
            notification={notification}
            createdAt={notification.createdAt}
          />
        ))}
      </section>
    </PageLayout.Container>
  )   
}

export default NotificationsPage
