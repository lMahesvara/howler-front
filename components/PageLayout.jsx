import React from 'react'

const PageLayout = React.forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className='relative grow shrink'>
      {children}
    </div>
  )
})
PageLayout.displayName = 'PageLayout'

const PageContainer = React.forwardRef(({ children }, ref) => {
  return (
    <main
      ref={ref}
      className=' flex flex-col items-center border-x border-[#2f3336] w-full min-h-screen grow shrink max-w-[600px] h-full'
    >
      {children}
    </main>
  )
})

PageContainer.displayName = 'PageMain'

const PageHeader = React.forwardRef(({ children }, ref) => {
  return (
    <header
      ref={ref}
      className='min-h-[53px] sticky top-0 w-full flex items-center justify-start px-4 backdrop-filter backdrop-blur-md bg-[rgba(0,0,0,0.65)] z-30'
    >
      {children}
    </header>
  )
})
PageHeader.displayName = 'PageHeader'

const PageHeaderTitle = React.forwardRef(({ children }, ref) => {
  return (
    <h2
      ref={ref}
      className='text-[#e7e9ea] whitespace-nowrap font-bold text-[17px] leading-5 sm:text-xl'
    >
      {children}
    </h2>
  )
})
PageHeaderTitle.displayName = 'PageHeaderTitle'

PageLayout.Container = PageContainer
PageLayout.Header = PageHeader
PageLayout.HeaderTitle = PageHeaderTitle

export default PageLayout
