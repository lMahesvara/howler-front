'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Icons } from './Icons'
import RoundedButtonLayout from './RoundedButtonLayout'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { useHowl } from '@/hooks/useHowl'
import { getShortTime } from '@/lib/utils'
import { usePostCounters } from '@/hooks/usePostCounters'
import { deleteHowl } from '@/services/api'
import { toast } from 'sonner'

const Post = ({ idHowl, id, userProfile = null }) => {
  const router = useRouter()

  const { howl, isLoading: isLoadingHowl } = useHowl(idHowl)

  const [showModal, setShowModal] = useState(false)

  const { user, text, image, date, likes, rehowls, replies, type } = howl ?? {}

  const { user: userData = {}, isLoading: isLoadingUser } = useUser(user ?? '')

  const {
    like,
    rehowl,
    likesCount,
    rehowlsCount,
    handleLike,
    handleRehowl,
    reloadData,
  } = usePostCounters({ likes, id, idHowl: howl?._id, rehowls, user })

  useEffect(() => {
    reloadData()
  }, [isLoadingHowl, howl, id])

  const openModal = e => {
    e.stopPropagation()
    setShowModal(true)
  }

  const closeModal = e => {
    e.stopPropagation()
    setShowModal(false)
  }

  const handleDelete = async e => {
    e.stopPropagation()
    try {
      const res = await deleteHowl(idHowl)
      toast.success('Howl deleted')
      closeModal(e)
    } catch (error) {
      toast.error('Error deleting howl')
    }
  }

  return (
    <>
      <article
        className='relative w-full px-4 overflow-hidden bg-black cursor-pointer border-b border-[#2f3336] hover:bg-[#ffffff08] transition-colors duration-200 flex max-w-full shrink z-0'
        onClick={() => router.push(`/${userData.username}/status/${howl._id}`)}
      >
        <div className='flex flex-col max-w-full shrink grow'>
          {/* Actions */}
          <div className='pt-3 basis-0 grow'>
            {/* Rehowled */}
            {userProfile?.id !== user && !!userProfile && (
              <div className='flex mb-1 -m-1'>
                <div className='flex items-center justify-end mr-3 basis-10 grow-0'>
                  <Icons.Repeat2 className='w-4 h-4 text-[#71767b]' />
                </div>
                <div className='flex items-center justify-start basis-0 grow shrink'>
                  <Link
                    href='#'
                    className='text-[13px] font-semibold cursor-pointer hover:underline text-[#71767b] leading-4 whitespace-nowrap overflow-ellipsis overflow-hidden'
                  >
                    {id === userProfile?.id
                      ? 'You'
                      : userProfile?.username ?? 'User'}{' '}
                    rehowled
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Content */}
          <div className='flex flex-row max-w-full shrink grow basis-auto'>
            <div className='box-border relative flex mr-3 basis-10 grow-0 shrink-0'>
              <Link
                className='w-10 h-10 rounded-full bg-[#16181c]'
                href={`/${userData?.username}`}
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                {userData && (
                  <img
                    src={userData?.image}
                    alt=''
                    className='w-full h-full transition-opacity duration-200 rounded-full hover:opacity-80'
                  />
                )}
              </Link>
            </div>

            <div className='box-border flex flex-col pb-3 shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)]'>
              {/* header */}
              <div className='flex items-start justify-between  shrink grow mb-0.5 max-w-[calc(100%-1.25rem-1rem)] sm:max-w-[calc(100%)]'>
                <div className='flex flex-row max-w-full shrink grow'>
                  <Link
                    className='text-[15px] font-bold shrink text-[#e7e9ea] hover:underline leading-5 whitespace-nowrap overflow-ellipsis overflow-hidden '
                    href={`/${userData?.username}`}
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  >
                    {userData?.name ?? 'User'}
                  </Link>
                  <Link
                    className='text-[15px] font-normal shrink text-[#71767b] leading-5 ml-1 whitespace-nowrap overflow-ellipsis overflow-hidden'
                    href={`/${userData?.username}`}
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  >
                    @{userData?.username ?? 'user'}
                  </Link>
                  <span className='text-[15px] font-bold shrink-0 text-[#71767b] leading-5 px-1'>
                    •
                  </span>
                  <Link
                    className='text-[15px] font-normal shrink text-[#71767b] leading-5 hover:underline whitespace-nowrap'
                    href='#'
                  >
                    {getShortTime(new Date(date))}
                  </Link>
                </div>
                {id === user && (
                  <div className='relative'>
                    <button
                      className='relative ml-5 bg-transparent max-w-min shrink grow basis-auto hover:text-[#1d9bf0] text-[#71767b]'
                      onClick={openModal}
                    >
                      <span className='sr-only'>More</span>
                      <div className='absolute top-0 right-0 left-0 bottom-0  rounded-full hover:bg-[rgba(29,155,240,0.1)] transition-colors duration-200 inline-flex -m-2'></div>
                      <Icons.MoreHorizontal className='w-5 h-5 text-inherit' />
                    </button>
                    {showModal && (
                      <div className='absolute top-0 right-0 inline-flex -m-2 max-w-[75vw] rounded-xl bg-black border-[#2f3336] border shadow-sm shadow-white z-10'>
                        <div
                          className='fixed inset-0 z-10 w-full h-full cursor-default'
                          onClick={closeModal}
                        ></div>
                        <button
                          className='flex w-full gap-3 px-4 py-3 hover:bg-[#ffffff08] items-center text-[#f4212e] z-50'
                          onClick={handleDelete}
                        >
                          <Icons.Trash2 className='w-5 h-5 text-inherit' />
                          <span className='text-[15px] font-bold text-inherit leading-4 whitespace-nowrap'>
                            Delete this howl
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* text */}
              <p className='text-[rgb(231,233,234)] font-normal text-[15px] leading-5 relative whitespace-pre-wrap'>
                {text}
              </p>
              {/* Image */}
              {image && (
                <div className='mt-3 rounded-2xl border border-[rgb(47,51,54)] overflow-hidden w-full h-full grow'>
                  <img
                    src={
                      image ||
                      'https://pbs.twimg.com/media/FrgThLgWYAEh0I-?format=jpg&name=small'
                    }
                    alt=''
                    className='object-cover w-full h-full transition-opacity duration-200 rounded-2xl hover:opacity-80 '
                  />
                </div>
              )}
              <div className='flex justify-start gap-6 mt-3'>
                <RoundedButtonLayout
                  title={'Reply'}
                  bgColorHover='hover:bg-[#1d9bf01a]'
                  textColorHover='hover:text-[#1d9bf0]'
                  textColor={'text-[#71767b]'}
                >
                  <Icons.MessageCircle className='w-5 h-5 text-inherit' />
                  <span className='text-[13px] leading-4 '>
                    {replies?.length ?? 0}
                  </span>
                </RoundedButtonLayout>
                <RoundedButtonLayout
                  title={'Rehowl'}
                  bgColorHover='hover:bg-[#00ba7c1a]'
                  textColorHover='hover:text-[#00b87a]'
                  textColor={rehowl ? 'text-[#00b87a]' : 'text-[#71767b]'}
                  onClick={handleRehowl}
                >
                  <Icons.Repeat2 className='w-5 h-5 text-inherit' />
                  <span className='text-[13px] leading-4 '>{rehowlsCount}</span>
                </RoundedButtonLayout>
                <RoundedButtonLayout
                  title={'Like'}
                  bgColorHover='hover:bg-[#f918801a]'
                  textColorHover='hover:text-[#f91880]'
                  textColor={like ? 'text-[#f91880]' : 'text-[#71767b]'}
                  onClick={handleLike}
                >
                  <Icons.Heart
                    className={`w-5 h-5 text-inherit ${
                      like ? 'fill-current' : ''
                    }`}
                  />

                  <span className='text-[13px] leading-4 '>{likesCount}</span>
                </RoundedButtonLayout>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Post
