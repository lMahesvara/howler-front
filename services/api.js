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

export const getHowl = async id => {
  try {
    return await (await fetch(`${API_URL}/howls/${id}`)).json()
  } catch (error) {
    console.log(error)
  }
}

export const login = async userObject =>{
  try {    
    let response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    })

    let data = await response.json()
    // console.log(data)

    return data
  } catch (error) {
    
  }
}

export const loginGoogle = async userObject => {
  console.log(userObject)
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
    // console.log(data)

    return data
  } catch (error) {
    console.log(error)
  }
}
