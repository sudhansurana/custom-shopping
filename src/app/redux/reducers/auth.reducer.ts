import * as types from '../types'
// import initialState from './initialState'

export const initialState = {
  user: null,
  profile: null,
  isLoggedIn: false,
}

export default function productReducer (
  state = initialState,
  action: any
) {
  console.log('action', action)
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {user: action.user, isLoggedIn: true}

    case types.PROFILE_SUCCESS:
      return {profile:action.profile}
    case types.LOGOUT:
        return {user: null, isLoggedIn: false}

    default:
      return state
  }
}
