'use client'
import React from 'react'
import RoundedButtonLayout from './RoundedButtonLayout'
import { Icons } from './Icons'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <div className=' min-w-[56px] flex items-center justify-start'>
      <RoundedButtonLayout
        title='Go back'
        textColor='text-[#eff3f4]'
        bgColorHover='hover:bg-[rgba(239,243,244,0.1)]'
        onClick={goBack}
      >
        <Icons.ArrowLeft className='w-5 h-5 text-inherit' />
      </RoundedButtonLayout>
    </div>
  )
}

export default BackButton
