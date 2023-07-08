import { useAuth } from '@/store/authStore'
import { Icons } from './Icons'
import PageLayout from './PageLayout'

const ModalEditProfile = ({ closeModal }) => {
  const { user } = useAuth()

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50'>
      <div className='relative w-full max-w-[600px] max-h-[600px] bg-black rounded-2xl pb-4 border border-[#333639]'>
        <PageLayout.Header className='justify-between rounded-t-2xl'>
          <div className='flex items-center gap-5'>
            <button
              className='p-2  rounded-full hover:bg-[#eff3f41a] transition-colors duration-200 '
              onClick={closeModal}
            >
              <Icons.Close className='w-5 h-5 text-white' />
            </button>
            <h2 className='text-xl font-semibold leading-6 text-[#e7e9ea]'>
              Edit Profile
            </h2>
          </div>
          <button className='bg-[#eff3f4] cursor-pointer min-w-[32px] min-h-[32px] rounded-full px-4 text-black text-[15px] disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#eff3f4] disabled:text-[#2f3336] transition-colors duration-200 hover:bg-[#e3e8e9] hover:text-[#2f3336] font-semibold'>
            Save
          </button>
        </PageLayout.Header>
        <div>
          <div className='w-full h-full overflow-hidden max-h-[200px] border-2 border-black relative'>
            <div className='absolute flex items-center justify-center w-full h-full bg-[#0000004d]'>
              <button className='p-2 bg-[#0f141963] rounded-full hover:bg-[#272c3098] transition-colors duration-200 backdrop-filter backdrop-blur-sm opacity-75'>
                <Icons.ImagePlus className='w-5 h-5 text-white' />
              </button>
            </div>
            <img
              src={user?.banner}
              alt=''
              className='object-cover object-center w-full h-full'
            />
          </div>
        </div>
        <div className='flex flex-col gap-1 px-4 pt-3 mb-4'>
          <div className='w-1/4 min-w-[48px] -mt-[10%] mb-3 h-auto overflow-visible relative'>
            <div className='object-cover object-center w-[112px] h-[112px] border-4 border-black rounded-full relative'>
              <div className='absolute flex items-center justify-center w-full h-full -top-[10%] mt-2.5 rounded-full bg-[#0000004d]'>
                <button className='p-2 bg-[#0f1419bf] rounded-full hover:bg-[#272c3098] transition-colors duration-200 backdrop-filter backdrop-blur-sm opacity-75'>
                  <Icons.ImagePlus className='w-5 h-5 text-white' />
                </button>
              </div>
              <img
                src={user?.image}
                alt=''
                className='object-cover object-center w-full h-full rounded-full'
              />
            </div>
          </div>
          <label
            className=' border rounded-[4px] border-[#333639] text-[#71767b] focus-within:text-[#1d9bf0] focus-within:border-[#1d9bf0]
          '
          >
            <div className='flex py-2 flex-col px-2 border border-transparent grow shrink focus-within:border-[#1d9bf0] h-full'>
              <div>
                <span className='text-inherit leading-4 font-normal text-[13px]'>
                  Name
                </span>
              </div>
              <input
                type='text'
                defaultValue={user?.name}
                maxLength={50}
                className='bg-transparent text-[#e7e9ea] leading-6 text-[17px] font-normal focus:outline-none'
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ModalEditProfile
