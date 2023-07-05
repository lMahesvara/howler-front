'use client'
import React from 'react'
import Post from './Post'
import { useHowl } from '@/hooks/useHowl'

const ListOfComments = ({ replies }) => {
  return (
    <section className='w-full'>
      {replies.map(reply => (
        <Post key={reply} idHowl={reply} />
      ))}
    </section>
  )
}

export default ListOfComments
