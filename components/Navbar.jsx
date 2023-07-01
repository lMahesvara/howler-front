import React from 'react'
import {listMenu} from '../config/sidebar'
import NavLinks from '@/components/NavLinks'
import LittleUser  from './LittleUser'

const Navbar = () => {
  return (
    <div className='flex flex-col items-start max-w-[300] gap-4 bg-black'>
      <img src="/logo900x900.png" alt="logo-howler" className='w-[40px] mb-4 ml-2' />

      <section className='text-center'>
        {listMenu.map((item, index) => (
          <NavLinks key = {index} {...item}/>
        ))}
      </section>
      <LittleUser/>
    </div>
  )
}

export default Navbar
