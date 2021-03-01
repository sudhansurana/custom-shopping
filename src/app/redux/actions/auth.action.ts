import AuthApi from '../api/auth.api'
import * as types from '../types'

export function loginSuccess (user: any) {
  return { type: types.LOGIN_SUCCESS, user }
}
export function profileSuccess (profile: any) {
  return { type: types.PROFILE_SUCCESS, profile }
}

export function showLoader () {
  return { type: types.SHOW_LOADING }
}

export function hideLoader () {
  return { type: types.HIDE_LOADING }
}

export function onLogout () {
  return { type: types.LOGOUT }
}

export function login (user: any) {
  return async function (dispatch: any) {
    dispatch(showLoader())
    return AuthApi.login(user)
      .then((userData: any) => {
        const data = userData.data[0] || {};
        dispatch(loginSuccess(data))
        dispatch(hideLoader())
      })
      .catch(error => {
        throw error
      })
  }
}

export function getProfile (email: string) {
  return async function (dispatch: any) {
    dispatch(showLoader())
    return AuthApi.profile(email)
      .then(res => {
        console.log('getProfile->res', res)
        const profile = res.data?.[0]
        console.log('getProfile->profile', profile)
        dispatch(profileSuccess(profile))
        dispatch(hideLoader())
      })
      .catch(error => {
        throw error
      })
  }
}

export function logout() {
  return async function(dispatch: any) {
    return new Promise((resolve: any, reject: any) => {
      dispatch(onLogout())
      setTimeout(() => {
        resolve(true)
      }, 100)
    })    
  }
}
