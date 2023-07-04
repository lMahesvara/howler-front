import BackButton from '@/components/BackButton'
import ExtendedPost from '@/components/ExtendedPost'
import ListOfComments from '@/components/ListOfComments'
import PageLayout from '@/components/PageLayout'
import Reply from '@/components/Reply'

const page = ({ params }) => {
  const { username, howlId } = params

  console.log(username, howlId)
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
      <ExtendedPost />
      <Reply />
      <ListOfComments />
    </PageLayout.Container>
  )
}

export default page
