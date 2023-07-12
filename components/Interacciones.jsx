'use client'
import SeguirUser from './SeguirUser'

const ModalInteracciones = ({ name, users, closeModal }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
      <div
        className='absolute inset-0 z-0 w-full h-full'
        onClick={closeModal}
      ></div>
      <div className='relative w-full max-w-2xl mx-auto bg-black border border-gray-700 shadow-lg rounded-3xl md:w-3/5'>
        <button
          onClick={closeModal}
          className='absolute top-0 right-0 z-50 flex items-center justify-center w-10 h-10 mt-4 mr-4 text-2xl font-bold text-white bg-black rounded-full focus:outline-none hover:bg-gray-700'
        >
          <svg className='w-6 h-6 text-white fill-current' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' />
          </svg>
        </button>

        <h2 className='pt-4 ml-6 text-2xl font-bold text-left text-white'>
          {name}
        </h2>

        <div className='flex flex-col p-6 items-left justify-left'>
          {users?.map((user, index) => (
            <SeguirUser key={index} userId={user} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModalInteracciones
