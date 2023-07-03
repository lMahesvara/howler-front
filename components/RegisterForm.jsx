import React from 'react'

const RegisterForm = () => {
  return (
    <section className='py-16'>
      <h1 className='text-4xl font-bold'>
        WHAT IS <br /> HAPPENING NOW...
      </h1>

      <p className='text-2xl font-semibold mt-32'>Join Howler today.</p>
      <div className='flex flex-col items-start justify-center w-[55%] gap-5 mt-8'>
        <button
          type='submit'
          className='h-12 px-6 transition duration-300 rounded-md group bg-white hover:bg-gray-700 hover:text-white text-black font-semibold w-full cursor-pointer'>
          Sign up
        </button>

        <button
          className='h-12 px-6 transition duration-300 rounded-md group bg-white hover:bg-gray-700 hover:text-white w-full'
          // onClick={() => signIn('google')}
        >
          <div className='flex flex-row items-center justify-center space-x-4'>
            <span className='text-sm font-semibold tracking-wide transition duration-300 w-max group-hover:text-white sm:text-base text-black'>
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
          <p className='text-xs italic w-full'>
            By signing up, you agree to the{' '}
            <a
              className='text-xs italic underline hover:text-blue-600'
              href='#'
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              className='text-xs italic underline hover:text-blue-600'
              href='#'
            >
              Privacy Policy
            </a>
            , including the{' '}
            <a
              className='text-xs italic underline hover:text-blue-600'
              href='#'
            >
              Cookie Policy.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default RegisterForm
