'use client'
import { useState } from 'react'
import { likeHowl, rehowlHowl, unlikeHowl, addNotification } from '@/services/api'
import { toast } from 'sonner'

export const usePostCounters = ({
  likes = [],
  id,
  idHowl,
  rehowls = [],
  user,
}) => {
  const [like, setLike] = useState(likes.find(like => like === id) ?? false)
  const [rehowl, setRehowl] = useState(
    rehowls.find(rehowl => rehowl === id) ?? false
  )
  const [likesCount, setLikesCount] = useState(likes.length)
  const [rehowlsCount, setRehowlsCount] = useState(rehowls.length)

  const reloadData = async () => {
    setLike(likes.find(like => like === id) ?? false)
    setRehowl(rehowls.find(rehowl => rehowl === id) ?? false)
    setRehowlsCount(rehowls.length)
    setLikesCount(likes.length)
  }

  const handleLike = async e => {
    e.stopPropagation()

    if (user === id) {
      return toast.error("You can't like your own howl")
    }

    if (like) {
      const { likes } = await unlikeHowl(idHowl, id)
      setLikesCount(likes)
    } else {
      const { likes } = await likeHowl(idHowl, id)
      const notification = {
        userTo: user,
        userFrom: id,
        type: "like",
        howl: idHowl,
        title: "likes your howl",
        body: "",
      }
      await addNotification(notification)
      setLikesCount(likes)
    }
    setLike(!like)
  }

  const handleRehowl = async e => {
    e.stopPropagation()

    if (user === id) {
      return toast.error("You can't rehowl your own howl")
    }

    const notification = {
      userTo: user,
      userFrom: id,
      type: "rehowl",
      howl: idHowl,
      title: "rehowled your howl",
      body: "",
    }
    await addNotification(notification)
    const { rehowls } = await rehowlHowl(idHowl, id)
    setRehowlsCount(rehowls)
    setRehowl(!rehowl)
  }

  return {
    like,
    likesCount,
    rehowlsCount,
    handleLike,
    handleRehowl,
    reloadData,
    rehowl,
  }
}
