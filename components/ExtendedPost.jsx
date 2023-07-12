import Link from 'next/link'
import { Icons } from './Icons'
import CounterLink from './CounterLink'
import RoundedButtonLayout from './RoundedButtonLayout'
import { useUser } from '@/hooks/useUser'
import { getFullTime } from '@/lib/utils'
import { usePostCounters } from '@/hooks/usePostCounters'
import { useEffect, useState } from 'react'
import ModalInteracciones from '@/components/Interacciones'

const ExtendedPost = ({ howl, id }) => {
  const { user, text, image, date, likes, rehowls, replies, type } = howl ?? {}
  const { user: userData, isLoading } = useUser(user)

  const {
    like,
    rehowl,
    likesCount,
    rehowlsCount,
    handleLike,
    handleRehowl,
    reloadData,
  } = usePostCounters({ likes, id, idHowl: howl._id, rehowls, user })

  useEffect(() => {
    reloadData()
  }, [id, howl])

  const [showModal, setShowModal] = useState(false)
  const [showModalRehowl, setShowModalRehowl] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const openModalRehowl = () => {
    setShowModalRehowl(true)
  }

  const closeModalRehowl = () => {
    setShowModalRehowl(false)
  }

  if (isLoading) return null

  return (
    <article className='relative flex w-full max-w-full px-4 overflow-hidden bg-black shrink '>
      <div className='flex flex-col max-w-full shrink grow'>
        {/* Actions */}
        <div className='pt-3 basis-0 grow'></div>
        {/* Content */}
        <div className='flex gap-3'>
          <Link className='w-10 h-10' href={`/${userData.username}`}>
            <img
              src={userData?.image}
              alt=''
              className='w-full h-full transition-opacity duration-200 rounded-full '
            />
          </Link>
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
        {image && (
          <div className='mt-3 rounded-2xl border border-[#2f3336] overflow-hidden w-full h-full grow'>
            <img
              src={image}
              alt=''
              className='object-cover w-full h-full cursor-pointer rounded-2xl'
            />
          </div>
        )}
        <div className='my-3'>
          <Link
            className='text-[15px] font-normal shrink text-[#71767b] leading-5 hover:underline whitespace-nowrap'
            href='#'
          >
            {getFullTime(new Date(date))}
          </Link>
        </div>
        <div className='flex flex-wrap gap-5 border-y border-[#2f3336] py-4 justify-evenly'>
          <CounterLink amount={replies.length ?? 0} text={'Comments'} />
          <CounterLink
            amount={rehowlsCount}
            text={'Rehowls'}
            onClick={openModalRehowl}
          />

          <CounterLink amount={likesCount} onClick={openModal} text={'Likes'} />
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
            textColor={rehowl ? 'text-[#00b87a]' : 'text-[#71767b]'}
            onClick={handleRehowl}
          >
            <Icons.Repeat2 className='w-6 h-6 text-inherit' />
          </RoundedButtonLayout>
          <RoundedButtonLayout
            title={'Like'}
            bgColorHover='hover:bg-[#f918801a]'
            textColorHover='hover:text-[#f91880]'
            textColor={like ? 'text-[#f91880]' : 'text-[#71767b]'}
            onClick={handleLike}
          >
            <Icons.Heart
              className={`w-6 h-6 text-inherit ${like ? 'fill-current' : ''}`}
            />
          </RoundedButtonLayout>
        </div>
      </div>
      {showModal && (
        <ModalInteracciones
          name='Liked by'
          users={likes}
          closeModal={closeModal}
        />
      )}
      {showModalRehowl && (
        <ModalInteracciones
          name='Rehowled by'
          users={rehowls}
          closeModal={closeModalRehowl}
        />
      )}
    </article>
  )
}

export default ExtendedPost
