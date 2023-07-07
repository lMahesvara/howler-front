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
    session: async ({ session, token, user }) => {
      //console.log(session, token, user)
      return {
        ...session,
        accessToken: token?.accessToken || '',
        user: {
          ...session.user,
          ...token.user,
        },
      }
    },
    // session: async ({ session, token}) => {

    //   const user = {
    //     id: token.id,
    //     ...session.user,
    //   }
    //   const {user: updatedUser} = await loginGoogle(user)
    //   return {
    //     ...session,
    //     accessToken: token?.accessToken || '',
    //     user: {
    //       ...session.user,
    //       ...updatedUser,
    //     },
    //   }
    // },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user
        console.log('macana', u)
        return {
          ...token,
          user: u,
          id: u.id,
          randomKey: u.randomKey,
        }
      }
      return token
    },
    // signIn: async ({user}) => {
    //   try {
    //     const {user: updatedUser} = await loginGoogle(user)
    //     return{
    //       ...user,
    //       ...updatedUser,
    //     }
    //   } catch (error) {
    //     console.log(error)
    //     return false
    //   }
    // }
  },
  secret: process.env.SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
