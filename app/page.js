import BackButton from '@/components/BackButton'
import PageLayout from '@/components/PageLayout'
import Post from '@/components/Post'
import ProfileHeader from '@/components/ProfileHeader'

export default function Profile() {
  return (
    <>
      <PageLayout.Container>
        <PageLayout.Header>
          <BackButton />
          <div className='flex flex-col items-start justify-center flex-grow'>
            <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
              Kura
            </PageLayout.HeaderTitle>
            <h3 className='text-[#71767b] whitespace-nowrap font-normal text-[13px] leading-4'>
              570 Howls
            </h3>
          </div>
        </PageLayout.Header>
        <ProfileHeader />
        <Post />
        <Post />
        <Post />
        <Post />
      </PageLayout.Container>
    </>
  )
}
