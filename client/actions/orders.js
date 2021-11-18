import { getOrders, patchOrderStatus, postOrder } from '../api/orders'
import { showError } from './error'

export const PLACE_ORDER_PENDING = 'PLACE_ORDER_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
export const FETCH_ORDERS_PENDING = 'FETCH_ORDER_PENDING'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDER_SUCCESS'
export const UPDATE_ORDER_STATUS_PENDING = 'UPDATE_ORDER_STATUS_PENDING'
export const UPDATE_ORDER_STATUS_SUCCESS = 'UPDATE_ORDER_STATUS_SUCCESS'

export function placeOrderPending () {
  return { type: PLACE_ORDER_PENDING }
}

export function placeOrderSuccess () {
  return { type: PLACE_ORDER_SUCCESS }
}

export function fetchOrdersPending () {
  return { type: FETCH_ORDERS_PENDING }
}

export function fetchOrdersSuccess (orders) {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders: orders
  }
}

export function updateOrderStatusPending () {
  return { type: UPDATE_ORDER_STATUS_PENDING }
}

export function updateOrderStatusSuccess (order) {
  return {
    type: UPDATE_ORDER_STATUS_SUCCESS,
    order: order
  }
}

export function fetchOrders () {
  return (dispatch) => {
    dispatch(fetchOrdersPending())
    return getOrders()
      .then(orders => {
        dispatch(fetchOrdersSuccess(orders))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

export function placeOrder (cart, history) {
  return (dispatch) => {
    dispatch(placeOrderPending())
    return postOrder(cart)
      .then(() => {
        dispatch(placeOrderSuccess())
        history.push('/orders')
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

export function updateOrderStatus (id, newStatus) {
  return (dispatch) => {
    dispatch(updateOrderStatusPending())
    return patchOrderStatus(id, newStatus)
      .then((newOrder) => {
        dispatch(updateOrderStatusSuccess(newOrder))
        dispatch(fetchOrdersPending())
        return getOrders()
      })
      .then(orders => {
        dispatch(fetchOrdersSuccess(orders))
        return null
      }
      )
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
