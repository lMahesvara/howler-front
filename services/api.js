const API_URL = process.env.NEXT_PUBLIC_API_URL
export const getHome = async () => {
  try {
    return await (await fetch(`${API_URL}/howls`)).json()
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async id => {
  if (!id) return null
  try {
    return await (await fetch(`${API_URL}/users/${id}`)).json()
  } catch (error) {
    console.log(error)
  }
}
export const getUserByUsername = async username => {
  if (!username) return null
  try {
    return await (await fetch(`${API_URL}/users/un/${username}`)).json()
  } catch (error) {
    console.log(error)
  }
}

export const getHowlsByUser = async id => {
  try {
    return await (await fetch(`${API_URL}/howls/user/${id}`)).json()
  } catch (error) {
    console.log(error)
  }
}

export const postUser = async userObject => {
  try {
    return await (
      await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (id, user) => {
  try {
    return await (
      await fetch(`${API_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
    ).json()
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

export const postHowl = async howl => {
  try {
    return await (
      await fetch(`${API_URL}/howls`, {
        method: 'POST',
        body: JSON.stringify(howl),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const replyHowl = async (id, reply) => {
  try {
    return await (
      await fetch(`${API_URL}/howls/reply/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(reply),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const likeHowl = async (idHowl, idUser) => {
  try {
    return await (
      await fetch(`${API_URL}/howls/like/${idHowl}/${idUser}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const unlikeHowl = async (idHowl, idUser) => {
  try {
    return await (
      await fetch(`${API_URL}/howls/dislike/${idHowl}/${idUser}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const rehowlHowl = async (idHowl, idUser) => {
  try {
    return await (
      await fetch(`${API_URL}/howls/rehowl/${idHowl}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idUser }),
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const login = async userObject => {
  try {
    let response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    })

    let data = await response.json()

    return data
  } catch (error) {}
}

export const loginGoogle = async userObject => {
  try {
    let response = await fetch({
      url: `${API_URL}/auth/login/external`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    })

    let data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export const followUser = async (idUserFollow, idUser) => {
  try {
    return await (
      await fetch(`${API_URL}/follow/${idUserFollow}/${idUser}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const unfollowUser = async (idUserUnfollow, idUser) => {
  try {
    return await (
      await fetch(`${API_URL}/follow/unfollow/${idUserUnfollow}/${idUser}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const deleteHowl = async id => {
  try {
    const response = await fetch(`${API_URL}/howls/${id}`, {
      method: 'DELETE',
    })

    if (response.status === 200) {
      return await response.json()
    }
    throw new Error('Error deleting howl')
  } catch (error) {
    throw new Error(error)
  }
}

export const getMentions = async query => {
  try {
    return await (await fetch(`${API_URL}/users/mentions/${query}`)).json()
  } catch (error) {
    console.log(error)
  }
}
