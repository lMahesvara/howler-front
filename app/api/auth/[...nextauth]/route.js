import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { loginGoogle, login } from '@/services/api'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {
        const user = {
          username: credentials.username,
          password: credentials.password,
        }

        const { user: updatedUser } = await login(user)
        return updatedUser
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (token?.provider === 'credentials') {
        return {
          ...session,
          accessToken: token?.accessToken || '',
          user: {
            ...session.user,
            ...token.user,
          },
        }
      } else {
        const userToAuth = {
          id: token?.providerAccountId,
          name: token?.profile?.given_name,
          email: session?.user?.email,
          image: token?.user?.image,
        }
        const { user: updatedUser } = await loginGoogle(userToAuth)
        return {
          ...session,
          accessToken: token?.accessToken || '',
          user: {
            ...session.user,
            ...updatedUser,
          },
        }
      }
    },
    jwt: ({ token, user, account, profile }) => {
      if (user) {
        const u = user

        return {
          ...token,
          user: u,
          id: u.id,
          randomKey: u.randomKey,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          profile,
        }
      }
      return token
    },
  },
  secret: process.env.SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
