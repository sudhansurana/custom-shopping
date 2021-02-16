import * as types from '../types'
import initialState from './initialState'

export default function productReducer (
  state = initialState.isLoading,
  action: any
) {
  switch (action.type) {
    case types.SHOW_LOADING:
      return true
    case types.HIDE_LOADING:
      return false
    default:
      return state
  }
}
