import { getSignature } from '@/app/_actions'

export const getShortTime = (date = new Date()) => {
  if (isNaN(date)) return 'Invalid date'
  const now = new Date()
  const diff = (now.getTime() - date.getTime()) / 1000 // Diferencia en segundos

  if (diff < 60) {
    return `${Math.floor(diff)}sec`
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)}min`
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)}h`
  } else {
    const day = date.getDate()
    const month = new Intl.DateTimeFormat('en', { month: 'short' })?.format(
      date
    )

    return `${day} ${month}`
  }
}

export const getFullTime = date => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }

  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const uploadImage = async file => {
  const { timestamp, signature } = await getSignature()

  const formData = new FormData()
  formData.append('file', file)
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('folder', 'howler')

  const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL, {
    method: 'POST',
    body: formData,
  }).then(res => res.json())

  const { secure_url } = response

  return secure_url
}
