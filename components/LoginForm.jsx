import React from 'react'

const LoginForm = () => {
  return (
    <section className='flex flex-col items-center mt-12 shrink grow s:mt-0'>
      <div className='w-[55%] flex flex-col items-center gap-5'>
        <p className='text-xl font-semibold'>Have an account?</p>
        <button
          type='submit'
          className='w-full h-12 px-6 font-semibold text-black transition duration-300 bg-white rounded-md cursor-pointer group hover:bg-gray-700 hover:text-white'>
          Log in
        </button>
      </div>
    </section>
  )
}

export default LoginForm
