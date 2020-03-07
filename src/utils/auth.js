import Cookies from 'js-cookie'

const TokenKey = 'access_token'
const UserInfoKey = 'user_info'
const BusinessKey = 'business_info'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getUserInfo () {
  let userinfoStr = Cookies.get(UserInfoKey)
  let userinfoObj = {}
  if (userinfoStr && typeof userinfoStr === 'string') {
    userinfoObj = JSON.parse(userinfoStr)
  }
  return userinfoObj
}

export function setUserInfo (userinfo) {
  let userinfoStr = ''
  if (userinfo && typeof userinfo === 'object') {
    delete userinfo['AuthResult']
    userinfoStr = JSON.stringify(userinfo)
  }
  return Cookies.set(UserInfoKey, userinfoStr)
}

export function removeUserInfo () {
  return Cookies.remove(UserInfoKey)
}

export function getBusinessInfo () {
  let businessinfoStr = Cookies.get(BusinessKey)
  let businessinfoObj = {}
  if (businessinfoStr && typeof businessinfoStr === 'string') {
    businessinfoObj = JSON.parse(businessinfoStr)
  }
  return businessinfoObj
}

export function setBusinessInfo (businessinfo) {
  let businessinfoStr = ''
  if (businessinfo && typeof businessinfo === 'object') {
    businessinfoStr = JSON.stringify(businessinfo)
  }
  return Cookies.set(BusinessKey, businessinfoStr)
}

export function removeBusinessInfo () {
  return Cookies.remove(BusinessKey)
}
