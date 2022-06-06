export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && localStorage.getItem("userName")
    ? localStorage.getItem("userName")
    : ""

const setUser = user =>{
localStorage.setItem("userName", user)
}

let url
const loginUser = async reqParams => {
  url=new URL("/auth/local",process.env.SERVICE_URL)
  let response = await fetch(url.href, {
    method: "POST",
    body: JSON.stringify(reqParams),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response =>
      response.json().then(data => ({ status: response.status, body: data }))
    )
    .catch(err => console.log(err))

  return response
}

 const isLoggedIn = () => {
  const user = getUser()
  return user
}
 const logout = () => {
  localStorage.removeItem('userName')
  // callback()
}

const register = async reqParams => {
  url=new URL("/auth/local/register",process.env.SERVICE_URL)

  let response = await fetch(url.href, {
    method: "POST",
    body: JSON.stringify(reqParams),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response =>
      response.json().then(data => ({ status: response.status, body: data }))
    )
    .catch(err => console.log(err))

  return response
}

export const AuthServices = {
  loginUser,
  register,
  isLoggedIn,
  logout,
  setUser,
  getUser,
}
