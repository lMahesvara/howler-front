import React from 'react'
import { Icons } from '@/components/Icons'

const Notification = () => {
  return (
    <article className='relative shrink-0 grow-0 overflow-hidden bg-black cursor-pointer border border-[#2f3336] flex hover:bg-[#eff3f41a] p-3 gap-4 w-full'>
        <div className='xl:mr-3'>
            <div className='w-10 h-10'>
              <img
                src='https://picsum.photos/200/200'
                alt='user'
                className='w-[40px] h-[40px] transition-opacity duration-200 rounded-full hover:opacity-80'
              />
              <Icons.Heart className='absolute fill-current bottom-4 left-8 text-[#f91880]'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-1'>
                <p>Jonathan Aguilar </p>
                <p>agregó una publicación</p>
            </div>
            <div className='text-[15px] font-normal shrink text-[#71767b] leading-5 hover:underline whitespace-nowrap'>
                hace 9 horas
            </div>
          </div>
    </article>
  )
}

export default Notification