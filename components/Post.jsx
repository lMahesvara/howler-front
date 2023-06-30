import Link from 'next/link'
import React from 'react'

const Post = () => {
  return (
    <article
      className='relative w-full px-4 overflow-hidden bg-black cursor-pointer border-b border-[#2f3336] hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-200 flex max-w-full
    '
    >
      <div className='flex flex-col w-full max-w-full shrink grow'>
        <div>{/* Actions */}</div>
        <div className='flex flex-row w-full max-w-full'>
          <div className='mr-3'>
            <div className='w-10 h-10'>
              <img
                src='https://picsum.photos/200/200'
                alt=''
                className='w-full h-full transition-opacity duration-200 rounded-full hover:opacity-80'
              />
            </div>
          </div>
          <div className='flex flex-col w-full max-w-full shrink grow'>
            {/* header */}
            <div className='flex items-start justify-between w-full max-w-full'>
              <div className='flex flex-row w-full max-w-full shrink'>
                <Link
                  className='text-[15px] font-bold shrink text-[#e7e9ea] hover:underline leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden '
                  href='#'
                >
                  El Programador Senior
                </Link>
                <Link
                  className='text-[15px] font-normal shrink text-[#71767b] leading-5 ml-1 whitespace-nowrap overflow-ellipsis overflow-hidden'
                  href='#'
                >
                  @5eniorDeveloper
                </Link>
                <span className='text-[15px] font-bold shrink text-[#71767b] leading-5 px-1'>
                  •
                </span>
                <Link
                  className='text-[15px] font-normal shrink text-[#71767b] leading-5 hover:underline whitespace-nowrap overflow-ellipsis overflow-hidden'
                  href='#'
                >
                  Mar 18
                </Link>
              </div>
            </div>
            <div>{/* Text */}</div>
            <div>{/* Image */}</div>
            <div>{/* Actions */}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post
