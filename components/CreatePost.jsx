import React from 'react'
import { Icons } from './Icons'

const CreatePost = () => {
  return (
    <article
      className='relative w-full p-4 overflow-hidden bg-black border-b border-[#2f3336] hover:bg-[#ffffff08] transition-colors duration-200 flex max-w-full shrink  pt-6'
    >
      <div className='flex flex-row max-w-full shrink grow basis-auto'>
        <div className='box-border relative flex mr-3 basis-10 grow-0 shrink-0'>
          <div className='w-10 h-10'>
            <img
              src='https://picsum.photos/200/200'
              alt=''
              className='w-full h-full transition-opacity duration-200 rounded-full hover:opacity-80 cursor-pointer'
            />
          </div>
        </div>

        <div className='box-border flex flex-col shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)]'>
          <input
            type='text'
            className='rounded-full placeholder-gray bg-gray-800 p-2 pl-4'
            placeholder='¿Qué estás pensando?'
          />

          <div className='box-border flex flex-row shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)] justify-center mt-4 ml-4 px-6'>
            <div className='box-border flex flex-row shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)] gap-2 text-[13px] items-center'>
                <span> <Icons.FileImage className='w-[20px]'/> </span>
                <button>Foto</button>
            </div>
            <input
              type='submit'
              value='HOWL'
              className='bg-white w-16 h-7 rounded-full text-black text-[15px]'
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default CreatePost
