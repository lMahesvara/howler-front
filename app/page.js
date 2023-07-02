import Post from '@/components/Post'
import ProfileHeader from '@/components/ProfileHeader'

export default function Home() {
  return (
    <div className='grow shrink'>
      <main className=' flex flex-col items-center border border-[#2f3336] w-full min-h-screen overflow-x-hidden grow shrink max-w-[600px]'>
        <section className='max-w-[700px]'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </main>
    </div>
  )
}
