import React from 'react'
import { listMenu } from '../config/sidebar'
import NavLinks from '@/components/NavLinks'
import LittleUser from './LittleUser'

const Navbar = () => {
  return (
    <header className='flex justify-center md:justify-end grow shrink min-w-[68px] sm:min-w-[88px] pt-5 px-2'>
      <div className='flex flex-col  max-w-[300] gap-4 bg-black items-center w-[68px] sm:w-[88px] xl:w-[275px] px-1 fixed xl:items-start'>
        <section className='flex flex-col gap-4 text-center'>
          <img
            src='/logo900x900.png'
            alt='logo-howler'
            className='w-[40px] ml-2'
          />
          {listMenu.map((item, index) => (
            <NavLinks key={index} {...item} />
          ))}
        </section>
        <LittleUser />
      </div>
    </header>
  )
}

export default Navbar
