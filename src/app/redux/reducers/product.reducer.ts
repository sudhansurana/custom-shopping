import * as types from '../types'


export interface IProductState {
  products: any[];
  product: any;
  isLoading: boolean;
  banner: any;
}

export const initialState: IProductState = {
  products: [],
  product: null,
  isLoading: false,
  banner: null,
}
export function productReducer(
  state = initialState,
  action: any
) {
  // console.log('action', action)
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.products }

    case types.GET_PRODUCT_SUCCESS:
      return { ...state, product: action.product}

    case types.MAIN_BANNER:
      return { ...state, banner: action.banner}

    default:
      return state
  }
}
