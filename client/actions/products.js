import { getProducts, addProduct, deleteProduct, patchProduct } from '../api/products'
import { showError } from '../actions/error'

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const ADD_PRODUCT_PENDING = 'ADD_PRODUCT_PENDING'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_PENDING = 'DELETE_PRODUCT_PENDING'
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_PENDING = 'UPDATE_PRODUCT_PENDING'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'

export function fetchProductsPending () {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

export function fetchProductsSuccess (products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products
  }
}

export function addProductPending () {
  return { type: ADD_PRODUCT_PENDING }
}

export function addProductSuccess () {
  return { type: ADD_PRODUCT_SUCCESS }
}

export function deleteProductPending () {
  return { type: DELETE_PRODUCT_PENDING }
}

export function deleteProductSuccess () {
  return { type: DELETE_PRODUCT_SUCCESS }
}

export function updateProductPending() {
  return { type: UPDATE_PRODUCT_PENDING }
}

export function updateProductSuccess() {
  return { type: UPDATE_PRODUCT_SUCCESS }
}

export function fetchProducts () {
  return (dispatch) => {
    dispatch(fetchProductsPending())
    return getProducts()
      .then((products) => {
        dispatch(fetchProductsSuccess(products))
        return null
      })
      .catch((err) => {
        // if the error is from our routes, this will use the message our route
        // sends back, rather than the generic 'Internal Server Error' from a
        // status 500
        // if the error is from elsewhere in the Promise chain, there won't be
        // an err.response object, so we use err.message
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

export function insertProduct (product) {
  return (dispatch) => {
    dispatch(addProductPending())
    return addProduct(product)
      .then(() => {
        dispatch(addProductSuccess)
        return null
      })
      .catch(err => console.error('I double dare you mother fucker ', err.message))
  }
}

export function removeProduct (id) {
  return (dispatch) => {
    dispatch(deleteProductPending())
    return deleteProduct(id)
      .then(() => {
        dispatch(deleteProductSuccess())
        return null
      })
      .catch(err => console.error('Get your hands off me! ', err.message))
  }
}

export function updateProduct (updatedProduct) {
  return (dispatch) => {
    dispatch(updateProductPending())
    return patchProduct(updatedProduct)
      .then(() => {
        dispatch(updateProductSuccess())
        return null
      })
      .catch(err => console.error('Step off! ', err.message))
  }
}
