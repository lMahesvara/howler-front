'use client'
import useSWR from 'swr'
import { getHowl } from '@/services/api'

export const useHowl = id => {
  const { data, isLoading, error } = useSWR(`/api/howls/${id}`, () =>
    getHowl(id)
  )

  return {
    howl: data,
    isLoading,
    error,
  }
}
