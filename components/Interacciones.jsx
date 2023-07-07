import React from 'react'
import SeguirUser from './SeguirUser'
const ModalInteracciones = ({ name }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
      <div className='relative w-96 max-w-2xl mx-auto bg-black shadow-lg rounded-3xl md:w-2/5 border border-gray-700'>
        <button className='absolute top-0 right-0 z-50 flex items-center justify-center w-10 h-10 mt-4 mr-4 text-2xl font-bold text-white bg-black rounded-full focus:outline-none hover:bg-gray-700'>
          <svg className='w-6 h-6 text-white fill-current' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' />
          </svg>
        </button>

        <h1 className='py-4 text-3xl font-bold text-center text-white'>
          {name}
        </h1>

        <div className='flex flex-col items-left justify-left p-6'>
          <SeguirUser />
          <SeguirUser />
          <SeguirUser />
          <SeguirUser />
        </div>
      </div>
    </div>
  )
}

export default ModalInteracciones
