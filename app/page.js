import Post from '@/components/Post'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <section className='min-w-[370px] max-w-[700px] border border-[#2f3336] w-full flex'>
        <Post />
      </section>
    </main>
  )
}
