import Link from 'next/link'
import React from 'react'

const CounterLink = ({ onClick, amount, text }) => {
  return (
    <button
      className='mr-5 hover:underline text-[#e7e9ea] text-sm leading-4'
      onClick={onClick}
      type='button'
    >
      {amount} <span className='text-[#71767b] text-sm'>{text}</span>
    </button>
  )
}

export default CounterLink
