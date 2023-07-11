import { Icons } from './Icons'
import CounterLink from './CounterLink'
import { useAuth } from '@/store/authStore'
import ProfileNotFound from './ProfileNotFound'
import { followUser, unfollowUser } from '@/services/api'

const ProfileHeader = ({ user, openModal, username }) => {
  const { user: loggedUser } = useAuth()
  if (!user) return <ProfileNotFound username={username} />

  const joinedDate = new Date(user.createdAt)
  const formattedDate = joinedDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const isFollowing = loggedUser?.following.includes(user._id)

  const handleFollowUser = async () => {
    try {
      const response = await followUser(user._id, loggedUser._id)
    } catch (error) {}
  }

  const handleUnfollowUser = async () => {
    try {
      const response = await unfollowUser(user._id, loggedUser._id)
      console.log(response)
    } catch (error) {}
  }

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
          <div className='flex flex-wrap items-start justify-between h-12 mb-4 shrink sm:h-16 md:h-18 lg:h-20 '>
            <div className='min-w-[48px] transform -translate-y-1/2 h-auto overflow-visible relative'>
              <div className='object-cover object-center border-4 border-black rounded-full'>
                <img
                  src={user.image}
                  alt=''
                  className='object-cover object-center w-24 h-24 rounded-full sm:w-32 sm:h-32 md:w-36 md:h-36'
                />
              </div>
            </div>
            {loggedUser?._id === user._id ? (
              <button
                className='mb-3 border border-[#536471] min-w-[36px] min-h-[36px] px-4 rounded-full text-[15px] leadin-5 font-bold text-[#eff3f4] hover:bg-[#eff3f41a]'
                onClick={openModal}
              >
                Edit profile
              </button>
            ) : (
              <>
                {isFollowing ? (
                  <button
                    className='mb-3 border border-[#536471] min-w-[36px] min-h-[36px] px-4 rounded-full text-[15px] leadin-5 font-bold text-[#eff3f4] hover:text-[#f4212e] hover:border-[#f4212e]'
                    onClick={handleUnfollowUser}
                  >
                    Followed
                  </button>
                ) : (
                  <button
                    className='mb-3 min-w-[36px] min-h-[36px] px-4 rounded-full text-[15px] leadin-5 font-bold text-[#eff3f4] hover:bg-[#1a8cd8] hover:text-white bg-[#1d9bf0]'
                    onClick={handleFollowUser}
                  >
                    Follow
                  </button>
                )}
              </>
            )}
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
              Joined <time>{formattedDate}</time>
            </p>
          </div>
          <div className='flex flex-wrap flex-1 '>
            <CounterLink
              href='#'
              amount={user.following.length}
              text={'Siguiendo'}
            />
            <CounterLink
              href='#'
              amount={user.followers.length}
              text={'Seguidores'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
