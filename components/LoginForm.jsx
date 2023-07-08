import React, { useState } from 'react'
import ModalLogin from './ModalLogin'

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section className='flex flex-col items-center mt-0 sm:mt-12 shrink grow'>
      <div className='w-[55%] flex flex-col items-center gap-5'>
        <p className='text-xl font-semibold'>Have an account?</p>
        <button
          type='button'
          onClick={handleOpenModal}
          className='w-full h-12 px-6 font-semibold text-white transition duration-300 bg-[#1d9bf0] rounded-md cursor-pointer group hover:bg-[#1a8cd8] hover:text-white'
        >
          Log in
        </button>
      </div>

      {showModal && <ModalLogin handleCloseModal={() => setShowModal(false)} />}
    </section>
  )
}

export default LoginForm
