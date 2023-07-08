import React, { useEffect, useState } from 'react'
import StepComponent from './StepComponent'
import ModalLogin from './ModalLogin'
import { signIn } from 'next-auth/react'

const RegisterForm = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section className='flex flex-col items-center justify-center px-12 py-16 shrink grow sm:items-start sm:justify-start md:px-0'>
      <h1 className='hidden text-3xl font-bold sm:block md:text-4xl'>
        WHAT IS <br /> HAPPENING NOW...
      </h1>

      <p className='mt-16 text-3xl font-extrabold sm:font-semibold sm:text-2xl md:mt-32'>
        Join Howler today.
      </p>
      <div className='flex flex-col items-center justify-center md:w-[55%] gap-5 sm:mt-14 mt-12'>
        <button
          type='button'
          onClick={handleOpenModal}
          className='w-full h-12 px-6 font-semibold text-black transition duration-300 bg-white rounded-md cursor-pointer group hover:bg-gray-700 hover:text-white overflow-ellipsis'
        >
          Sign up
        </button>

        <button
          className='w-full h-12 px-6 transition duration-300 bg-white rounded-md group hover:bg-gray-700 hover:text-white'
          type='button'
          onClick={() => signIn('google')}
        >
          <div className='flex flex-row items-center justify-center space-x-4'>
            <span className='text-sm font-semibold tracking-wide text-black transition duration-300 w-max group-hover:text-white sm:text-base'>
              Sign in with Google
            </span>
            <img
              src='https://tailus.io/sources/blocks/social/preview/images/google.svg'
              className='w-5'
              alt='google logo'
            />
          </div>
        </button>

        <div>
          <p className='w-full text-xs italic'>
            By signing up, you agree to the
            <a
              className='text-xs italic underline hover:text-blue-600'
              href='#'
            >
              Terms of Service
            </a>
            and
            <a
              className='text-xs italic underline hover:text-blue-600'
              href='#'
            >
              Privacy Policy
            </a>
            , including the
            <a
              className='text-xs italic underline hover:text-blue-600'
              href='#'
            >
              Cookie Policy.
            </a>
          </p>
        </div>
      </div>

      {showModal && (
        <StepComponent handleCloseModal={() => setShowModal(false)} />
      )}
    </section>
  )
}

export default RegisterForm
