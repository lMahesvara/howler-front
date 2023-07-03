import React from 'react'

const LoginForm = () => {
  return (
    <section>
      <div className='w-[55%] flex flex-col items-center gap-5'>
        <p className='text-xl font-semibold'>Have an account?</p>
        <button
          type='submit'
          className='h-12 px-6 transition duration-300 rounded-md group bg-white hover:bg-gray-700 hover:text-white text-black font-semibold w-full cursor-pointer'>
          Log in
        </button>
      </div>
    </section>
  )
}

export default LoginForm
