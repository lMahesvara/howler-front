import React from 'react'
import { Icons } from './Icons'

const ModalPassword = () => {
  return (
    <div class='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div class='relative w-3/4 max-w-xl mx-auto bg-black shadow-lg rounded-3xl py-6 sm:w-full'>
        <button class='absolute top-0 right-0 z-50 flex items-center justify-center w-10 h-10 mt-4 mr-4 text-2xl font-bold text-white bg-black rounded-full focus:outline-none hover:bg-gray-700'>
          <svg class='w-6 h-6 text-white fill-current' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' />
          </svg>
        </button>

        <h1 class='py-4 text-3xl font-bold text-center text-white'>Sign Up</h1>

        <div class='flex flex-col items-center justify-center p-6'>
          <form action='#'>
            <div class='relative w-full h-10 mt-8'>
              <span class='absolute right-0 top-2'>
                <Icons.Lock />
              </span>
              <input
                class='w-full h-full bg-black focus:outline-none border-b-4 border-transparent border-b-white'
                type='text'
                required
                placeholder='Password'
              />
            </div>

            <div class='relative w-full h-10 my-8'>
              <span class='absolute right-0 top-2'>
                <Icons.Lock />
              </span>
              <input
                class='w-full h-full bg-black focus:outline-none border-b-4 border-transparent border-b-white'
                type='text'
                placeholder='Repeat Password'
                required
              />
            </div>

            <button
              type='submit'
              class='w-full h-8 my-6 font-semibold text-black transition duration-300 bg-white rounded-md cursor-pointer group hover:bg-gray-700 hover:text-white overflow-ellipsis'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalPassword
