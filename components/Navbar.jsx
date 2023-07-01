import React from 'react'
import {listMenu} from '../config/sidebar'
import NavLinks from '@/components/NavLinks'

const Navbar = () => {
  return (
    <div className='flex flex-col'>
      <img src="/logo900x900.png" alt="logo-howler" className='w-12 mb-4' />

      <section className='text-center'>
        {listMenu.map((item, index) => (
          <NavLinks key = {index} {...item}/>
        ))}
      </section>
    </div>
  )
}

export default Navbar
