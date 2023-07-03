import React from 'react'
import RegisterForm  from '../../components/RegisterForm'
import LoginForm from '../../components/LoginForm'

const page = () => {
  return (
    <div className='grow shrink'>
      <main className=' flex flex-col items-center w-full min-h-screen overflow-x-hidden grow shrink '>
        <section className='max-w-[700px]'>
          <RegisterForm/>
          <LoginForm/>
        </section>
      </main>
    </div>
  )
}

export default page