import React from 'react'

const MentionTemplate = suggestion => {
  return (
    <div className='flex bg-transparent items-center gap-2 '>
      <img
        alt={suggestion.name}
        src={suggestion.image}
        className='w-[42px] h-[42px] !rounded-full'
      />
      <div className='flex flex-col overflow-x-hidden text-white'>
        <h3
          className='text-inherit overflow-ellipsis max-w-full whitespace-nowrap overflow-hidden
      '
        >
          {suggestion.name}
        </h3>
        <small className='text-xs text-inherit overflow-ellipsis max-w-full whitespace-nowrap overflow-hidden'>
          @{suggestion.username}
        </small>
      </div>
    </div>
  )
}

export default MentionTemplate
