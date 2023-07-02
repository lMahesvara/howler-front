import React from 'react'
import Link from 'next/link'

const NavLinks = ({ name, icon, href }) => {
  return (
    <Link
      href={href}
      className='flex gap-2 text-[13px] items-center text-white hover:bg-[#eff3f41a] rounded-full p-3 w-fit'
    >
      {icon}
      <span className='hidden mr-4 xl:flex'>{name}</span>
    </Link>
  )
}

export default NavLinks
