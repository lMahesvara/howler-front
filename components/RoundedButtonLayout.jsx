import React from 'react'

const RoundedButtonLayout = ({
  children,
  textColor,
  textColorHover = '',
  bgColorHover = '',
  title,
  onClick,
}) => {
  return (
    <button
      className={`relative bg-transparent max-w-min flex items-center gap-1 ${textColorHover} ${textColor}`}
      onClick={onClick}
      type='button'
    >
      <span className='sr-only'>{title}</span>
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 inline-flex -m-2 transition-colors duration-200 rounded-full ${bgColorHover}`}
      ></div>
      {children}
    </button>
  )
}

export default RoundedButtonLayout
