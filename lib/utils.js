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
