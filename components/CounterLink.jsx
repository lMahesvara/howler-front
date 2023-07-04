import Link from 'next/link'
import React from 'react'

const CounterLink = ({ href, amount, text }) => {
  return (
    <Link
      className='mr-5 hover:underline text-[#e7e9ea] text-sm leading-4'
      href={href}
    >
      {amount} <span className='text-[#71767b] text-sm'>{text}</span>
    </Link>
  )
}

export default CounterLink
