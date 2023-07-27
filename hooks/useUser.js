'use client'
import useSWR from 'swr'
import { getUser } from '@/services/api'

export const useUser = id => {
  const { data, isLoading, error } = useSWR(`/api/users/${id}`, () =>
    getUser(id)
  )

  return {
    user: data,
    isLoading,
    error,
  }
}
