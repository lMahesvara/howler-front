'use client'
import BackButton from '@/components/BackButton'
import CreatePost from '@/components/CreatePost'
import ExtendedPost from '@/components/ExtendedPost'
import ListOfComments from '@/components/ListOfComments'
import PageLayout from '@/components/PageLayout'
import { useHowl } from '@/hooks/useHowl'
import { useAuth } from '@/store/authStore'

const Page = ({ params }) => {
  const { user } = useAuth()

  const { idHowl } = params
  const { howl, isLoading } = useHowl(idHowl)

  if (isLoading) return null
  console.log(user)

  return (
    <PageLayout.Container>
      <PageLayout.Header>
        <BackButton />
        <div className='flex flex-col items-start justify-center flex-grow'>
          <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
            Howl
          </PageLayout.HeaderTitle>
        </div>
      </PageLayout.Header>
      <ExtendedPost howl={howl} id={user?._id} />
      <CreatePost idHowl={idHowl} label={'Howl your reply!'} user={user} />
      <ListOfComments replies={howl.replies} userLogged={user?._id} />
    </PageLayout.Container>
  )
}

export default Page
