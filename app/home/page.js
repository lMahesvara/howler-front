import CreatePost from '@/components/CreatePost'
import PageLayout from '@/components/PageLayout'
import Post from '@/components/Post'

export default function Home() {
  return (
    <PageLayout.Container>
      <PageLayout.Header>
        <div className='flex flex-col items-start justify-center flex-grow'>
          <PageLayout.HeaderTitle className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'>
            Kura
          </PageLayout.HeaderTitle>
        </div>
      </PageLayout.Header>
      <CreatePost />
      <section className='w-full'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </PageLayout.Container>
  )
}
