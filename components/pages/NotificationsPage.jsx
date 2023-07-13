'use client'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import Notification from '@/components/Notification'

const NotificationsPage = () => {
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
        <Notification/>
      </section>
    </PageLayout.Container>
  )
}

export default NotificationsPage