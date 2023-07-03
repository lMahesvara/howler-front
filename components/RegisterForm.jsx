import React from 'react'

const RegisterForm = () => {
  return (
    <section className='py-16 shrink grow s:pb-8'>
      <h1 className='text-4xl font-bold s:hidden'>
        WHAT IS <br /> HAPPENING NOW...
      </h1>

      <p className='mt-32 text-2xl font-semibold s:mt-0'>Join Howler today.</p>
      <div className='flex flex-col items-center justify-center w-[55%] gap-5 mt-14'>
        <button
          type='submit'
          className='w-full h-12 px-6 font-semibold text-black transition duration-300 bg-white rounded-md cursor-pointer group hover:bg-gray-700 hover:text-white overflow-ellipsis'>
          Sign up
        </button>

        <button
          className='w-full h-12 px-6 transition duration-300 bg-white rounded-md group hover:bg-gray-700 hover:text-white'
          // onClick={() => signIn('google')}
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
