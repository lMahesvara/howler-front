import { Icons } from './Icons'
import RoundedButtonLayout from './RoundedButtonLayout'

const Reply = () => {
  return (
    <article className='w-full pt-4 pb-3 border-b border-[#2f3336] px-4 flex gap-3'>
      <div className='w-10 h-10'>
        <img
          src='https://pbs.twimg.com/profile_images/1513035935918825473/mep3G3sy_normal.jpg'
          alt=''
          className='w-full h-full transition-opacity duration-200 rounded-full cursor-pointer hover:opacity-80'
        />
      </div>
      <div className='box-border flex flex-col shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)]'>
        <input
          type='text'
          className='p-2 pl-4 bg-[#eff3f41a] rounded-full placeholder-gray focus:ring-0 focus:outline-none'
          placeholder='Howl your reply!'
        />

        <div className='box-border flex flex-row shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)] justify-between items-center mt-4 ml-4 px-6'>
          <RoundedButtonLayout
            textColor='text-[#eff3f4]'
            textColorHover='hover:text-white'
            bgColorHover='hover:bg-[rgba(239,243,244,0.1)]'
            title='Picture'
          >
            <Icons.FileImage className='w-[20px]' />
            <span className='text-[13px] leading-4 '>Picture</span>
          </RoundedButtonLayout>
          <button className='bg-white cursor-pointer w-16 h-7 rounded-full text-black text-[15px]'>
            Howl
          </button>
        </div>
      </div>
    </article>
  )
}

export default Reply
