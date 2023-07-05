const API_URL = process.env.NEXT_PUBLIC_API_URL
export const getHome = async () => {
  try {
    return await (await fetch(`${API_URL}/howls`)).json()
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async id => {
  try {
    return await (await fetch(`${API_URL}/users/${id}`)).json()
  } catch (error) {
    console.log(error)
  }
}

export const getHowl = async id => {
  try {
    return await (await fetch(`${API_URL}/howls/${id}`)).json()
  } catch (error) {
    console.log(error)
  }
}
