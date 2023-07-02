import Link from 'next/link'
import React from 'react'
import { Icons } from './Icons'

const Post = () => {
  return (
    <article
      className='relative w-full px-4 overflow-hidden bg-black cursor-pointer border-b border-[#2f3336] hover:bg-[#ffffff08] transition-colors duration-200 flex max-w-full shrink
    '
    >
      <div className='flex flex-col max-w-full shrink grow'>
        {/* Actions */}
        <div className='pt-3 basis-0 grow'>
          {/* Rehowled */}
          <div className='flex mb-1 -m-1'>
            <div className='flex items-center justify-end mr-3 basis-10 grow-0'>
              <Icons.Repeat2 className='w-4 h-4 text-[#71767b]' />
            </div>
            <div className='flex items-center justify-start basis-0 grow shrink'>
              <Link
                href='#'
                className='text-[13px] font-semibold cursor-pointer hover:underline text-[#71767b] leading-4 whitespace-nowrap overflow-ellipsis overflow-hidden'
              >
                You Rehowled
              </Link>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className='flex flex-row max-w-full shrink grow basis-auto'>
          <div className='box-border relative flex mr-3 basis-10 grow-0 shrink-0'>
            <div className='w-10 h-10'>
              <img
                src='https://picsum.photos/200/200'
                alt=''
                className='w-full h-full transition-opacity duration-200 rounded-full hover:opacity-80'
              />
            </div>
          </div>

          <div className='box-border flex flex-col pb-3 shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)]'>
            {/* header */}
            <div className='flex items-start justify-between  shrink grow mb-0.5 max-w-[calc(100%-1.25rem-1rem)] sm:max-w-[calc(100%)]'>
              <div className='flex flex-row max-w-full shrink grow'>
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
                <span className='text-[15px] font-bold shrink-0 text-[#71767b] leading-5 px-1'>
                  •
                </span>
                <Link
                  className='text-[15px] font-normal shrink text-[#71767b] leading-5 hover:underline whitespace-nowrap'
                  href='#'
                >
                  Mar 18
                </Link>
              </div>
              <button className='relative ml-5 bg-transparent max-w-min shrink grow basis-auto hover:text-[#1d9bf0] text-[#71767b]'>
                <span className='sr-only'>More</span>
                <div
                  className='absolute top-0 right-0 left-0 bottom-0  rounded-full hover:bg-[rgba(29,155,240,0.1)] transition-colors duration-200 inline-flex -m-2 
                '
                ></div>
                <Icons.MoreHorizontal className='w-5 h-5 text-inherit' />
              </button>
            </div>
            {/* text */}
            <p className='text-[rgb(231,233,234)] font-normal text-[15px] leading-5 relative whitespace-pre-wrap'>
              El cliente explicándome el requerimiento
            </p>
            {/* Image */}
            <div className='mt-3 rounded-2xl border border-[rgb(47,51,54)] overflow-hidden w-full h-full grow'>
              <img
                src='https://pbs.twimg.com/media/FrgThLgWYAEh0I-?format=jpg&name=small'
                alt=''
                className='object-cover w-full h-full transition-opacity duration-200 rounded-2xl hover:opacity-80 '
              />
            </div>
            <div className='flex justify-start gap-6 mt-3'>
              <button className='relative bg-transparent max-w-min hover:text-[#1d9bf0] text-[#71767b] flex items-center gap-1'>
                <span className='sr-only'>Reply</span>
                <div className='absolute top-0 right-0 left-0 bottom-0  rounded-full hover:bg-[rgba(29,155,240,0.1)] transition-colors duration-200 inline-flex -m-2'></div>
                <Icons.MessageCircle className='w-5 h-5 text-inherit' />
                <span className='text-[13px] leading-4 '>100</span>
              </button>
              <button className='relative bg-transparent max-w-min hover:text-[rgb(0,186,124)] text-[#71767b] flex items-center gap-1'>
                <span className='sr-only'>Rehowl</span>
                <div className='absolute top-0 right-0 left-0 bottom-0  rounded-full hover:bg-[rgba(0,186,124,0.1)] transition-colors duration-200 inline-flex -m-2'></div>
                <Icons.Repeat2 className='w-5 h-5 text-inherit' />
                <span className='text-[13px] leading-4 '>325</span>
              </button>
              <button className='relative bg-transparent max-w-min hover:text-[rgb(249,24,128)] text-[#71767b] flex items-center gap-1'>
                <span className='sr-only'>like</span>
                <div className='absolute top-0 right-0 left-0 bottom-0  rounded-full hover:bg-[rgba(249,24,128,0.1)] transition-colors duration-200 inline-flex -m-2'></div>
                <Icons.Heart className='w-5 h-5 text-inherit' />
                <span className='text-[13px] leading-4 '>2,793</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post
