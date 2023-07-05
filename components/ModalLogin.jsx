import React from 'react'
import { Icons } from './Icons'

const ModalLogin = ({handleCloseModal}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-3/4 max-w-xl py-6 mx-auto bg-black shadow-lg rounded-3xl sm:w-full'>
        <button className='absolute top-0 right-0 z-50 flex items-center justify-center w-10 h-10 mt-4 mr-4 text-2xl font-bold text-white bg-black rounded-full focus:outline-none hover:bg-gray-700' onClick={handleCloseModal}>
          <svg className='w-6 h-6 text-white fill-current' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' />
          </svg>
        </button>

        <h1 className='py-4 text-3xl font-bold text-center text-white'>Log in</h1>

        <div className='flex flex-col items-center justify-center p-6'>
          <form action='#'>
            <div className='relative w-full h-10 mt-8'>
              <span className='absolute right-0 top-2'>
                <Icons.Profile/>
              </span>
              <input
                className='w-full h-full bg-black border-b-4 border-transparent focus:outline-none border-b-white'
                type='text'
                required
                placeholder='Username'
              />
            </div>

            <div className='relative w-full h-10 my-8'>
              <span className='absolute right-0 top-2'>
                <Icons.Lock/>
              </span>
              <input
                className='w-full h-full bg-black border-b-4 border-transparent focus:outline-none border-b-white'
                type='text'
                placeholder='Password'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full h-8 my-6 font-semibold text-black transition duration-300 bg-white rounded-md cursor-pointer group hover:bg-gray-700 hover:text-white overflow-ellipsis'
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin
