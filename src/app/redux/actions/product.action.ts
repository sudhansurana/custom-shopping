import ProductApi from '../api/product.api'
import * as types from '../types'
import * as actions from './auth.action'

export function loadProducts (products: any) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products}
}

export function getProduct (product: any) {
  return { type: types.GET_PRODUCT_SUCCESS, product }
}

export function mainBanner (banner: any) {
  return { type: types.MAIN_BANNER, banner }
}

export function getMainBanner () {
  return async function (dispatch: any) {
    dispatch(actions.showLoader())
    ProductApi.getMainBanner()
      .then((res: any) => {
        dispatch(mainBanner(res.data))
        dispatch(actions.hideLoader())
      })
      .catch(error => {
        dispatch(actions.hideLoader())
        throw error
      })
  }
}

export function getProducts () {
  return async function (dispatch: any) {
    dispatch(actions.showLoader())
    ProductApi.getProducts()
      .then((res: any) => {
        dispatch(loadProducts(res.data))
        dispatch(actions.hideLoader())
      })
      .catch(error => {
        dispatch(actions.hideLoader())
        throw error
      })
  }
}

export function getProductById (productId: string) {
  return async function (dispatch: any) {
    dispatch(actions.showLoader())
    return ProductApi.getProductById(productId)
      .then(res => {
        console.log('getProductById->res', res)
        const product = res.data?.[0]
        console.log('getProductById->product', product)
        dispatch(getProduct(product))
        dispatch(actions.hideLoader())
      })
      .catch(error => {
        throw error
      })
  }
}