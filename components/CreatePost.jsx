import React from 'react'
import { Icons } from './Icons'
import RoundedButtonLayout from './RoundedButtonLayout'

const CreatePost = () => {
  return (
    <article className='relative w-full p-4 overflow-hidden bg-black border-y border-[#2f3336] flex max-w-full shrink pt-6'>
      <div className='flex flex-row max-w-full shrink grow basis-auto'>
        <div className='box-border relative flex mr-3 basis-10 grow-0 shrink-0'>
          <div className='w-10 h-10'>
            <img
              src='https://picsum.photos/200/200'
              alt=''
              className='w-full h-full transition-opacity duration-200 rounded-full cursor-pointer hover:opacity-80'
            />
          </div>
        </div>

        <div className='box-border flex flex-col shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)]'>
          <input
            type='text'
            className='p-2 pl-4 bg-[#eff3f41a] rounded-full placeholder-gray focus:ring-0 focus:outline-none'
            placeholder='What is happening?!'
          />

          <div className='box-border flex flex-row shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)] justify-between items-center mt-4 ml-4 px-6'>
            <RoundedButtonLayout
              textColor='text-[#eff3f4]'
              textColorHover='hover:text-white'
              bgColorHover='hover:bg-[rgba(239,243,244,0.1)]'
              title='Picture'
            >
              <Icons.FileImage className='w-[20px]' />
              <span className='text-[13px] leading-4 '>Picture</span>
            </RoundedButtonLayout>
            <input
              type='submit'
              value='Howl'
              className='bg-white cursor-pointer w-16 h-7 rounded-full text-black text-[15px]'
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default CreatePost
