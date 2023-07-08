'use client'
import React from 'react'
import Post from './Post'

const ListOfComments = ({ replies, userLogged }) => {
  return (
    <section className='w-full'>
      {replies.map(reply => (
        <Post key={reply} idHowl={reply} id={userLogged} />
      ))}
    </section>
  )
}

export default ListOfComments
