'use client'
import BackButton from '@/components/BackButton'
import PageLayout from '@/components/PageLayout'
import Post from '@/components/Post'
import ProfileHeader from '@/components/ProfileHeader'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { getHowlsByUser } from '@/services/api'
import useSWR from 'swr'

export default function Profile() {
  
  const { data: session} = useSession() 
  const user = session?.user

  const { data } = useSWR('/api/howls/user', () => getHowlsByUser("64a75e916a5f842247e87d87"))

  useEffect(() => {
    if (data) console.log(data)
  }, [data])

  // if (status === 'loading') return null

  // if (!user) return null

  return (
    <>
      <PageLayout.Container>
        <PageLayout.Header>
          <BackButton />
          <div className='flex flex-col items-start justify-center flex-grow'>
            <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
              {user.name}
            </PageLayout.HeaderTitle>
            <h3 className='text-[#71767b] whitespace-nowrap font-normal text-[13px] leading-4'>
              {data.length} Howls
            </h3>
          </div>
        </PageLayout.Header>
        <ProfileHeader />
        <section className='w-full'>
        {data?.reverse().map((howl, index) => (
          <Post key={index} idHowl={howl._id} />
        ))}
      </section>
      </PageLayout.Container>
    </>
  )
}
