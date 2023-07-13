'use client'
import BackButton from '@/components/BackButton'
import ModalEditProfile from '@/components/ModalEditProfile'
import PageLayout from '@/components/PageLayout'
import Post from '@/components/Post'
import ProfileHeader from '@/components/ProfileHeader'
import { getUserByUsername } from '@/services/api'
import { useAuth } from '@/store/authStore'
import { useState } from 'react'
import useSWR from 'swr'

const ProfilePage = ({ params }) => {
  const { username } = params

  const [editProfile, setEditProfile] = useState(false)
  const { user: userLogged } = useAuth()
  const {
    data: user,
    isLoading,
    mutate,
  } = useSWR(
    `/api/users/username/${username}`,
    () => getUserByUsername(username),
    {
      refreshInterval: 1000,
    }
  )

  const openEditProfile = () => setEditProfile(true)

  const closeEditProfile = () => {
    setEditProfile(false)
    mutate()
  }

  //if (isLoading) return <div>Loading...</div>

  const numHowls = user?.howls?.length
  return (
    <>
      {editProfile && <ModalEditProfile closeModal={closeEditProfile} />}
      <PageLayout.Container>
        <PageLayout.Header>
          <BackButton />
          {user ? (
            <div className='flex flex-col items-start justify-center flex-grow'>
              <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
                {user.name}
              </PageLayout.HeaderTitle>
              <h3 className='text-[#71767b] whitespace-nowrap font-normal text-[13px] leading-4'>
                {numHowls} Howls
              </h3>
            </div>
          ) : (
            <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
              Profile
            </PageLayout.HeaderTitle>
          )}
        </PageLayout.Header>
        <ProfileHeader
          user={user}
          openModal={openEditProfile}
          username={username}
        />
        <section className='w-full border-t border-[#2f3336]'>
          {user?.howls?.toReversed().map((howl, index) => (
            <Post
              key={index}
              idHowl={howl}
              id={userLogged?._id}
              userProfile={{
                username,
                id: user?._id,
              }}
            />
          ))}
        </section>
      </PageLayout.Container>
    </>
  )
}

export default ProfilePage
