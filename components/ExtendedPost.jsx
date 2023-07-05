import Link from 'next/link'
import { Icons } from './Icons'
import CounterLink from './CounterLink'
import RoundedButtonLayout from './RoundedButtonLayout'
import { useUser } from '@/hooks/useUser'

const ExtendedPost = ({ howl }) => {
  const { user, text, image, date, likes, rehowls, replies, type } = howl ?? {}

  const { user: userData, isLoading } = useUser(user)

  if (isLoading) return null

  return (
    <article className='relative flex w-full max-w-full px-4 overflow-hidden bg-black shrink '>
      <div className='flex flex-col max-w-full shrink grow'>
        {/* Actions */}
        <div className='pt-3 basis-0 grow'>
          {/* Rehowled */}
          <div className='flex mb-1 -m-1'>
            <div className='flex items-center justify-end mr-3 basis-10 grow-0'>
              <Icons.Repeat2 className='w-4 h-4 text-[#71767b]' />
            </div>
            <div className='flex items-center justify-start basis-0 grow shrink'>
              <Link
                href={`/${userData.username}`}
                className='text-[13px] font-semibold cursor-pointer hover:underline text-[#71767b] leading-4 whitespace-nowrap overflow-ellipsis overflow-hidden'
              >
                You Rehowled
              </Link>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className='flex gap-3'>
          <div className='w-10 h-10 cursor-pointer'>
            <img
              src='https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_normal.jpg'
              alt=''
              className='w-full h-full transition-opacity duration-200 rounded-full '
            />
          </div>
          <div className='flex flex-col max-w-full shrink grow'>
            <Link
              className='text-[15px] font-bold shrink text-[#e7e9ea] hover:underline leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden w-min'
              href={`/${userData.username}`}
            >
              {userData.name}
            </Link>
            <Link
              className='text-[15px] font-normal shrink text-[#71767b] leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden w-min'
              href={`/${userData.username}`}
            >
              @{userData.username}
            </Link>
          </div>
        </div>

        <p className='text-[rgb(231,233,234)] font-normal text-[17px] leading-6- relative whitespace-pre-wrap mt-3'>
          {text}
        </p>
        <div className='mt-3 rounded-2xl border border-[#2f3336] overflow-hidden w-full h-full grow'>
          <img
            src='https://pbs.twimg.com/media/FztG-_lXoAAWpCc?format=jpg&name=small'
            alt=''
            className='object-cover w-full h-full cursor-pointer rounded-2xl'
          />
        </div>
        <div className='my-3'>
          <Link
            className='text-[15px] font-normal shrink text-[#71767b] leading-5 hover:underline whitespace-nowrap'
            href='#'
          >
            4:02 a. m. · 28 jun. 2023
          </Link>
        </div>
        <div className='flex flex-wrap gap-5 border-y border-[#2f3336] py-4 justify-evenly'>
          <CounterLink
            href={'#'}
            amount={replies.length ?? 0}
            text={'Comentarios'}
          />
          <CounterLink
            href={'#'}
            amount={rehowls.length ?? 0}
            text={'Rehowls'}
          />
          <CounterLink
            href={'#'}
            amount={replies.length ?? 0}
            text={'Me gusta'}
          />
        </div>
        <div className='flex flex-wrap gap-5 justify-around border-b py-3 border-[#2f3336]'>
          <RoundedButtonLayout
            title={'Reply'}
            bgColorHover='hover:bg-[#1d9bf01a]'
            textColorHover='hover:text-[#1d9bf0]'
            textColor={'text-[#71767b]'}
          >
            <Icons.MessageCircle className='w-6 h-6 text-inherit' />
          </RoundedButtonLayout>
          <RoundedButtonLayout
            title={'Rehowl'}
            bgColorHover='hover:bg-[#00ba7c1a]'
            textColorHover='hover:text-[#00b87a]'
            textColor={'text-[#71767b]'}
          >
            <Icons.Repeat2 className='w-6 h-6 text-inherit' />
          </RoundedButtonLayout>
          <RoundedButtonLayout
            title={'Like'}
            bgColorHover='hover:bg-[#f918801a]'
            textColorHover='hover:text-[#f91880]'
            textColor={'text-[#71767b]'}
          >
            <Icons.Heart className='w-6 h-6 text-inherit' />
          </RoundedButtonLayout>
        </div>
      </div>
    </article>
  )
}

export default ExtendedPost
