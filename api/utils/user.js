import Cookies from 'js-cookie'

const TokenKey = 'isLoginCapital'

export function getIsLogin () {
  return Cookies.get(TokenKey)
}

export function setIsLogin (token) {
  return Cookies.set(TokenKey, token)
}

export function removeIsLogin () {
  return Cookies.remove(TokenKey)
}
