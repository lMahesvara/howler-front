import Navbar from '@/components/Navbar'
import PageLayout from '@/components/PageLayout'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageLayout>{children}</PageLayout>
    </>
  )
}

export default layout
