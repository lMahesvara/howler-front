import ProfilePage from '@/components/pages/ProfilePage'
import { getUserByUsername } from '@/services/api'

export async function generateMetadata({ params, searchParams }, parent) {
  const { username } = params
  if (!username) return parent.generateMetadata({ params, searchParams })

  const user = await getUserByUsername(username)

  return {
    title: `${user?.name} (@${user?.username}) - Howler`,
    description: `${user.name} profile`,
  }
}

export default function Profile({ params }) {
  return <ProfilePage params={params} />
}
