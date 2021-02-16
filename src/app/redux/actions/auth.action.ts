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
  return function (dispatch: any) {
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
  return function (dispatch: any) {
    dispatch(showLoader())
    return AuthApi.profile(email)
      .then(profile => {
        dispatch(loginSuccess(profile.data))
        dispatch(hideLoader())
      })
      .catch(error => {
        throw error
      })
  }
}

export function logout() {
  return function(dispatch: any) {
    dispatch(onLogout)
  }
}
