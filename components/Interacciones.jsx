'use client'
import React, { useState, useEffect } from 'react'
import SeguirUser from './SeguirUser'
import { getHowl } from '@/services/api'

const ModalInteracciones = ({ name, howlId, closeModal }) => {
  const [likes, setLikes] = useState([])

  useEffect(() =>{
    const fetchLikes = () => {
      getHowl(howlId).then((howl) => {
        setLikes(howl.likes)
      })
    }

    fetchLikes()
  }, [howlId])
  console.log("like", likes)
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
      <div className='relative w-96 max-w-2xl mx-auto bg-black shadow-lg rounded-3xl md:w-2/5 border border-gray-700'>
        <button onClick={closeModal} className='absolute top-0 right-0 z-50 flex items-center justify-center w-10 h-10 mt-4 mr-4 text-2xl font-bold text-white bg-black rounded-full focus:outline-none hover:bg-gray-700'>
          <svg className='w-6 h-6 text-white fill-current' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' />
          </svg>
        </button>

        <h2 className='pt-4 text-2xl font-bold text-left ml-6 text-white'>
          {name} 
        </h2>

        <div className='flex flex-col items-left justify-left p-6'>
          {likes?.map((like, index)=>(
            <SeguirUser key={index} userId={like}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModalInteracciones
