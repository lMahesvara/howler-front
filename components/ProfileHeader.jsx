import Link from 'next/link'
import { Icons } from './Icons'
import RoundedButtonLayout from './RoundedButtonLayout'

const ProfileHeader = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col'>
        {/* banner */}
        <div className='w-full h-full overflow-hidden '>
          <img
            src='https://pbs.twimg.com/profile_banners/1353744322886295553/1687151062/1080x360'
            alt=''
            className='object-cover object-center w-full h-full '
          />
        </div>
        {/* info */}
        <div className='flex flex-col px-4 pt-3 mb-4'>
          <div className='flex flex-wrap items-start justify-between'>
            <div className='w-1/4 min-w-[48px] -mt-[15%] mb-3 h-auto overflow-visible relative'>
              <div className='object-cover object-center w-full h-full border-2 border-black rounded-full'>
                <img
                  src='https://pbs.twimg.com/profile_images/1513035935918825473/mep3G3sy_200x200.jpg'
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
              Kura
            </h2>
            <h3 className='text-[#71767b] whitespace-nowrap font-normal text-[15px] leading-5'>
              @Kuraxl_
            </h3>
          </div>
          <div className='leading-4 font-normal text-[15px] flex items-center gap-1 justify-start text-[#71767b] mb-3'>
            <Icons.CalendarDays className='w-5 h-5' />
            <p>
              Se unió en <time>enero de 2021</time>
            </p>
          </div>
          <div className='flex flex-wrap flex-1 '>
            <Link
              className='mr-5 hover:underline text-[#e7e9ea] text-sm leading-4'
              href='#'
            >
              294 <span className='text-[#71767b]'>Siguiendo</span>
            </Link>
            <Link
              className='mr-5 hover:underline text-[#e7e9ea] text-sm leading-4'
              href='#'
            >
              124 <span className='text-[#71767b]'>Seguidores</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
