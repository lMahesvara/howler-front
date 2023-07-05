import React from 'react'
import RegisterForm  from '../../components/RegisterForm'
import LoginForm from '../../components/LoginForm'
import ModalPassword from '@/components/ModalPassword'
import ModalSignUp from '@/components/ModalSignUp'

const page = () => {
  return (
    <div className='grow shrink'>
      <main className='flex flex-col-reverse w-screen h-screen min-h-screen overflow-x-hidden md:flex-row md:items-center grow shrink xl:overflow-hidden'>
        <section className='bg-none bg-no-repeat bg-cover w-[100%] h-screen flex flex-col justify-center items-center shrink grow md:w-[55%] md:bg-[url("/background-login.png")] s:mt-10 '>         
        <img className='w-[500px] min-w-[300px] px-6 drop-shadow-2xl' src='/logo900x900.png' alt='logo-howler'/>
        </section>

        <section className='pl-10 shrink grow'>
          <RegisterForm/>
          <LoginForm/>
        </section>
      </main>
      <ModalPassword/>
    </div>
  )
}

export default page