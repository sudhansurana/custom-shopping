import * as types from '../types'
// import initialState from './initialState'

export interface IAuthState {
  user: any;
  profile: any;
  isLoggedIn: boolean;
}

export const initialState:IAuthState  = {
  user: null,
  profile: null,
  isLoggedIn: false,
}

export function authReducer(
  state = initialState,
  action: any
) {
  console.log('action', action)
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { user: action.user, isLoggedIn: true }

    case types.PROFILE_SUCCESS:
      return { profile: action.profile, isLoggedIn: true }
    case types.LOGOUT:
      return { user: null, profile: null, isLoggedIn: false }

    default:
      return state
  }
}
