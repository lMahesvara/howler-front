import React from 'react'

const ProfileNotFound = () => {
  return (
    <section className='flex flex-col w-full'>
      <div className='flex flex-col'>
        {/* banner */}
        <div className='w-full h-full min-h-[125px] sm:h-44 md:h-[200px] overflow-hidden max-h-[200px] bg-[#333639]'></div>
        {/* info */}
        <div className='flex flex-col px-4 pt-3'>
          <div className='flex flex-wrap items-start justify-between'>
            <div
              className='w-1/4 min-w-[48px] transform -translate-y-1/2
             mb-3 h-auto overflow-visible relative'
            >
              <div className='object-cover object-center w-[150px] h-[150px] border-4 border-black rounded-full bg-[#16181c]'></div>
            </div>
          </div>
          <h2 className='text-[#e7e9ea] whitespace-nowrap font-extrabold text-xl leading-6 -mt-16'>
            {'@User not found'}
          </h2>
        </div>
        <div className='flex flex-col items-start justify-start gap-4 px-4 mx-auto mt-24'>
          <h1 className='text-[#e7e9ea] font-extrabold text-3xl'>
            This user does not exist
          </h1>
          <p className='text-[#71767b] text-[15px] leading-5'>
            Please check the username and try again
          </p>
        </div>
      </div>
      <div className='w-[590px]'></div>
    </section>
  )
}

export default ProfileNotFound
