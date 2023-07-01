import Link from 'next/link'
import React from 'react'

const LittleUser = () => {
  return (
    <article
      className='relative w-full px-4 overflow-hidden bg-black cursor-pointer  border-[#2f3336]  flex max-w-full
    '
    >
      <div className='flex flex-col w-full max-w-full shrink grow'>
        <div>{/* Actions */}</div>
        <div className='flex flex-row w-full max-w-full justify-center'>
          <div className='sm:mr-3'>
            <div className='w-11 h-11 p-1'>
              <img
                src='https://picsum.photos/200/200'
                alt=''
                className='w-full h-full transition-opacity duration-200 rounded-full hover:opacity-80'
              />
            </div>
          </div>
          <div className='hidden flex-col w-full max-w-full shrink grow sm:flex'>
            {/* header */}
            <div className='flex items-start justify-between w-full max-w-full'>
              <div className='flex flex-wrap flex-row w-full max-w-full shrink'>
                <div>
                  <Link
                    className=' flex text-[15px] font-bold shrink w-full text-[#e7e9ea] hover:underline leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden '
                    href='#'
                  >
                    El Programador Senior
                  </Link>
                </div>
                <Link
                  className='flex  text-[15px] font-normal shrink w-full text-[#71767b] leading-5  whitespace-nowrap overflow-ellipsis overflow-hidden '
                  href='#'
                >
                  @5eniorDeveloper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default LittleUser
