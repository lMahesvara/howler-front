'use client'
import BackButton from '@/components/BackButton'
import ExtendedPost from '@/components/ExtendedPost'
import ListOfComments from '@/components/ListOfComments'
import PageLayout from '@/components/PageLayout'
import Reply from '@/components/Reply'
import { useHowl } from '@/hooks/useHowl'

const Page = ({ params }) => {
  const { idHowl } = params
  const { howl, isLoading } = useHowl(idHowl)

  if (isLoading) return null

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
      <ExtendedPost howl={howl} />
      <Reply />
      <ListOfComments replies={howl.replies} />
    </PageLayout.Container>
  )
}

export default Page
