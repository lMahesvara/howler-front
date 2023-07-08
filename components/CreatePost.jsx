'use client'
import { useEffect, useRef, useState } from 'react'
import { Icons } from './Icons'
import RoundedButtonLayout from './RoundedButtonLayout'
import { useSWRConfig } from 'swr'
import { getSignature } from '@/app/_actions'
import { postHowl, replyHowl } from '@/services/api'

const CreatePost = ({ idHowl, label, user }) => {
  const [image, setImage] = useState(null)
  const [text, setText] = useState('')
  const imageRef = useRef(null)

  const { mutate } = useSWRConfig()

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image)
    }
  }, [image])

  const action = async () => {
    if (!text && !image) {
      return
    }

    let imageURL = ''
    if (image) {
      const { timestamp, signature } = await getSignature()

      const formData = new FormData()
      formData.append('file', image)
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY)
      formData.append('signature', signature)
      formData.append('timestamp', timestamp)
      formData.append('folder', 'howler')

      const response = await fetch(
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL,
        {
          method: 'POST',
          body: formData,
        }
      ).then(res => res.json())

      const { secure_url } = response
      imageURL = secure_url
    }

    if (idHowl) {
      const howl = {
        text,
        image: imageURL,
        user: user._id,
      }

      await replyHowl(idHowl, howl).then(res => {})
      mutate(`/api/howls/${idHowl}`)
    } else {
      //TODO: Sacar hashtags
      const howl = {
        text,
        image: imageURL,
        user: user._id,
      }

      await postHowl(howl).then(res => {})
      mutate('/api/howls')
    }
    setText('')
    setImage(null)
    imageRef.current.value = ''
  }

  if (!user) return null

  return (
    <article className='relative w-full p-4 overflow-hidden bg-black border-b border-[#2f3336] flex max-w-full shrink pt-6'>
      <div className='flex flex-row max-w-full shrink grow basis-auto'>
        <div className='box-border relative flex mr-3 basis-10 grow-0 shrink-0'>
          <div className='w-10 h-10'>
            <img
              src={user?.image}
              alt='user'
              className='w-full h-full transition-opacity duration-200 rounded-full cursor-pointer hover:opacity-80'
            />
          </div>
        </div>

        <form
          className='box-border flex flex-col shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)]'
          action={action}
        >
          <input
            type='text'
            className='p-2 pl-4 bg-[#eff3f41a] rounded-full placeholder-gray focus:ring-0 focus:outline-none'
            placeholder={label}
            value={text}
            onChange={e => setText(e.target.value)}
          />
          {image && (
            <div className='relative w-full h-full mt-3 overflow-hidden rounded-2xl grow'>
              <div>
                <button
                  className='absolute top-1 right-1 z-10 p-2 bg-[#0f1419bf] rounded-full hover:bg-[#272c30bf] transition-colors duration-200 backdrop-filter backdrop-blur-md'
                  onClick={() => {
                    setImage(null)
                    imageRef.current.value = ''
                  }}
                >
                  <Icons.Close className='w-4 h-4 text-white' />
                </button>
              </div>
              <img
                src={URL.createObjectURL(image)}
                alt=''
                className='object-cover w-full h-full rounded-2xl'
              />
            </div>
          )}

          <div className='box-border flex flex-row shrink grow basis-0 max-w-[calc(100%-40px-1rem)] sm:max-w-[calc(100%-40px)] justify-between items-center mt-4 ml-4 px-6'>
            <input
              type='file'
              className='hidden'
              ref={imageRef}
              accept='image/*'
              onChange={e => {
                setImage(e.target.files[0])
              }}
            />
            <RoundedButtonLayout
              textColor='text-[#eff3f4]'
              textColorHover='hover:text-white'
              bgColorHover='hover:bg-[rgba(239,243,244,0.1)]'
              title='Picture'
              onClick={() => {
                imageRef.current.click()
              }}
            >
              <Icons.FileImage className='w-[20px]' />
              <span className='text-[13px] leading-4 '>Picture</span>
            </RoundedButtonLayout>
            <input
              type='submit'
              value='Howl'
              disabled={!text && !image}
              className='bg-white cursor-pointer w-16 h-7 rounded-full text-black text-[15px] disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#eff3f4] disabled:text-[#2f3336] transition-colors duration-200 hover:bg-[#e3e8e9] hover:text-[#2f3336]'
            />
          </div>
        </form>
      </div>
    </article>
  )
}

export default CreatePost
