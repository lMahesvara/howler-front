import { followUser, unfollowUser } from '@/services/api'
import { useAuth } from '@/store/authStore'
import { useState } from 'react'

const FollowButton = ({ user }) => {
  const { user: loggedUser } = useAuth()

  const initialIsFollowing = loggedUser?.following.includes(user?._id)

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleFollowUser = async e => {
    e.stopPropagation()
    try {
      setIsFollowing(true)
      const response = await followUser(user._id, loggedUser._id)
    } catch (error) {}
  }

  const handleUnfollowUser = async e => {
    e.stopPropagation()
    try {
      setIsFollowing(false)
      const response = await unfollowUser(user._id, loggedUser._id)
    } catch (error) {}
  }
  return (
    <>
      {isFollowing ? (
        <button
          className='group border border-[#536471] min-w-[108px] max-w-[108px] min-h-[32px] px-4 rounded-full text-[15px] leadin-5 font-bold text-[#eff3f4] hover:text-[#f4212e] hover:border-[#f4212e]'
          onClick={handleUnfollowUser}
        >
          <span className='block w-full h-full group-hover:hidden'>
            Following
          </span>
          <span className='hidden w-full h-full group-hover:block'>
            Unfollow
          </span>
        </button>
      ) : (
        <button
          className='min-w-[36px] min-h-[32px] px-4 rounded-full text-[15px] leadin-5 font-bold text-[#eff3f4] hover:bg-[#1a8cd8] hover:text-white bg-[#1d9bf0]'
          onClick={handleFollowUser}
        >
          Follow
        </button>
      )}
    </>
  )
}

export default FollowButton
