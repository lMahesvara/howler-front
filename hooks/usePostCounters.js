'use client'
import { useState } from 'react'
import { likeHowl, unlikeHowl } from '@/services/api'

export const usePostCounters = ({ likes = [], id, idHowl, rehowls = [] }) => {
  const [like, setLike] = useState(likes.find(like => like === id) ?? false)
  const [likesCount, setLikesCount] = useState(likes.length)
  const [rehowlsCount, setRehowlsCount] = useState(rehowls.length)

  const reloadData = async () => {
    setLike(likes.find(like => like === id) ?? false)
    setRehowlsCount(rehowls.length)
    setLikesCount(likes.length)
  }

  const handleLike = async e => {
    e.stopPropagation()

    if (like) {
      const { likes } = await unlikeHowl(idHowl, id)
      setLikesCount(likes)
    } else {
      const { likes } = await likeHowl(idHowl, id)
      setLikesCount(likes)
    }
    setLike(!like)
  }

  const handleRehowl = async () => {}

  return {
    like,
    likesCount,
    rehowlsCount,
    handleLike,
    handleRehowl,
    reloadData,
  }
}
