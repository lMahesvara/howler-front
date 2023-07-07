import Link from 'next/link'
import { Icons } from './Icons'
import CounterLink from './CounterLink'
import { useSession } from 'next-auth/react'

const ProfileHeader = () => {
  const { data, status } = useSession()
  const user = data?.user

  if (status === 'loading') return null

  if (!user) return null
  
  const joinedDate = new Date(user.createdAt)
  const formattedDate = joinedDate.toLocaleDateString('es-ES', {
    month: 'long',
    year: 'numeric'
  })
  console.log(user)
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col'>
        {/* banner */}
        <div className='w-full h-full overflow-hidden max-h-[200px]'>
          <img
            src={user.banner}
            alt=''
            className='object-cover object-center w-full h-full'
          />
        </div>
        {/* info */}
        <div className='flex flex-col px-4 pt-3 mb-4'>
          <div className='flex flex-wrap items-start justify-between'>
            <div className='w-1/4 min-w-[48px] -mt-[15%] mb-3 h-auto overflow-visible relative'>
              <div className='object-cover object-center w-[150px] h-[150px] border-2 border-black rounded-full'>
                <img
                  src={user.image}
                  alt=''
                  className='object-cover object-center w-full h-full rounded-full'
                />
              </div>
            </div>
            <button className='mb-3 border border-[#536471] min-w-[36px] min-h-[36px] px-4 rounded-full text-[15px] leadin-5 font-bold text-[#eff3f4] hover:bg-[#eff3f41a]'>
              Editar perfil
            </button>
          </div>
          <div className='flex flex-col gap-1 mt-1 mb-3 shrink'>
            <h2 className='text-[#e7e9ea] whitespace-nowrap font-extrabold text-xl leading-6'>
              {user.name}
            </h2>
            <h3 className='text-[#71767b] whitespace-nowrap font-normal text-[15px] leading-5'>
              @{user.username}
            </h3>
          </div>
          <div className='leading-4 font-normal text-[15px] flex items-center gap-1 justify-start text-[#71767b] mb-3'>
            <Icons.CalendarDays className='w-5 h-5' />
            <p>
              Se unió en <time>{formattedDate}</time>
            </p>
          </div>
          <div className='flex flex-wrap flex-1 '>
            <CounterLink href='#' amount={user.following.length} text={'Siguiendo'} />
            <CounterLink href='#' amount={user.followers.length} text={'Seguidores'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
