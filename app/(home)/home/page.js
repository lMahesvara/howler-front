'use client'
import { useEffect } from 'react'
import CreatePost from '@/components/CreatePost'
import PageLayout from '@/components/PageLayout'
import Post from '@/components/Post'
import { getHome } from '@/services/api'
import useSWR from 'swr'
import { useAuth } from '@/store/authStore'

export default function Home() {
  const { user } = useAuth()
  const {
    data: dataHowl,
    error,
    isLoading,
  } = useSWR('/api/howls', () => getHome(), {
    refreshInterval: 1000,
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error</div>
  return (
    <PageLayout.Container>
      <PageLayout.Header>
        <div className='flex flex-col items-start justify-center flex-grow'>
          <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
            Home
          </PageLayout.HeaderTitle>
        </div>
      </PageLayout.Header>
      <CreatePost label={'What is happening?!'} user={user} />
      <section className='w-full'>
        {dataHowl?.map((howl, index) => (
          <Post key={index} idHowl={howl._id} id={user?._id} />
        ))}
      </section>
    </PageLayout.Container>
  )
}
