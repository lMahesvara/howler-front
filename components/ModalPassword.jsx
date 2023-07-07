import React from 'react'
import { Icons } from './Icons'
import { toast } from 'sonner'
import { postUser } from '@/services/api'

const ModalPassword = ({
  handlePrevStep,
  handleCloseModal,
  updateUser,
  user,
}) => {
  const actionData = event => {
    event.preventDefault()
    const data = new FormData(event.target)

    const pass = {
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    }

    if (pass.password !== pass.confirmPassword) {
      return toast.error("Passwords doesn't match")
    }

    updateUser({
      password: pass.password,
    })

    const newUser = {
      ...user,
      password: pass.password,
    }

    postUser(newUser)
      .then(res => {
        toast.success('User created successfully')
        handleCloseModal()
      })
      .catch(err => {
        toast.error('Error creating user')
      })
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-3/4 max-w-xl py-6 mx-auto bg-black shadow-lg rounded-3xl sm:w-full'>
        <button
          className='absolute top-0 right-0 z-50 flex items-center justify-center w-10 h-10 mt-4 mr-4 text-2xl font-bold text-white bg-black rounded-full focus:outline-none hover:bg-gray-700'
          type='button'
          onClick={handleCloseModal}
        >
          <svg className='w-6 h-6 text-white fill-current' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' />
          </svg>
        </button>

        <h1 className='py-4 text-3xl font-bold text-center text-white'>
          Sign Up
        </h1>

        <div className='flex flex-col items-center justify-center p-6'>
          <form onSubmit={actionData}>
            <div className='relative w-full h-10 mt-8'>
              <span className='absolute right-0 top-2'>
                <Icons.Lock />
              </span>
              <input
                className='w-full h-full bg-black border-b-4 border-transparent focus:outline-none border-b-white'
                type='password'
                name='password'
                maxLength={20}
                minLength={8}
                required
                placeholder='Password'
              />
            </div>

            <div className='relative w-full h-10 my-8'>
              <span className='absolute right-0 top-2'>
                <Icons.Lock />
              </span>
              <input
                className='w-full h-full bg-black border-b-4 border-transparent focus:outline-none border-b-white'
                type='password'
                name='confirmPassword'
                maxLength={20}
                minLength={8}
                placeholder='Repeat Password'
                required
              />
            </div>

            <div className='flex flex-row gap-2'>
              <button
                type='button'
                onClick={handlePrevStep}
                className='w-auto h-8 px-4 my-6 font-semibold text-black transition duration-300 bg-white rounded-md cursor-pointer group hover:bg-gray-700 hover:text-white overflow-ellipsis'
              >
                Prev
              </button>
              <button
                type='submit'
                className='w-full h-8 my-6 font-semibold text-black transition duration-300 bg-white rounded-md cursor-pointer group hover:bg-gray-700 hover:text-white overflow-ellipsis'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalPassword
