import Link from 'next/link'
import React from 'react'
import { Icons } from './Icons'
import RoundedButtonLayout from './RoundedButtonLayout'
const SeguirUser = () => {
  return (
    <article className='relative shrink-0 grow-0 overflow-hidden bg-black cursor-pointer  border-[#2f3336] flex hover:bg-[#eff3f41a] rounded-full p-3 max-w-full w-full'>
      <div className='flex flex-col max-w-full w-full'>
        <div className='flex flex-row justify-between'>
          <div className='flex w-full xl:mr-3'>
            <div className='w-8 h-8 xl:w-10 xl:h-10 mr-1'>
              <img
                src='https://picsum.photos/200/200'
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
                  El Programador Seniorasdasdas
                </Link>
                <Link
                  className='text-[12px] font-normal shrink text-[#71767b] leading-5  whitespace-nowrap overflow-ellipsis overflow-hidden xl:text-[15px]'
                  href='#'
                >
                  @5eniorDeveloper
                </Link>
              </div>
            </div>
          </div>
          {/* #1d9bf01a */}
          <div className='flex items-center mr-3'>
            <RoundedButtonLayout
              bgColorHover='hover:bg-[#1d9bf01a]'
              textColorHover='hover:text-[#1d9bf0]'
              textColor={'text-[#71767b]'}
              title='Picture'
            >
              <span className='text-[14px] leading-4 xl:text-[16px]'>
                Seguir
              </span>
            </RoundedButtonLayout>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SeguirUser
