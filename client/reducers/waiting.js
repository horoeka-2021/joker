import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_SUCCESS
} from '../actions/products'
import { SHOW_ERROR } from '../actions/error'
import { FETCH_ORDERS_PENDING, FETCH_ORDERS_SUCCESS, PLACE_ORDER_PENDING, PLACE_ORDER_SUCCESS, UPDATE_ORDER_STATUS_PENDING, UPDATE_ORDER_STATUS_SUCCESS } from '../actions/orders'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
    case PLACE_ORDER_PENDING:
    case FETCH_ORDERS_PENDING:
    case UPDATE_ORDER_STATUS_PENDING:
    case ADD_PRODUCT_PENDING:
    case DELETE_PRODUCT_PENDING:
    case UPDATE_PRODUCT_PENDING:
      return true

    case FETCH_PRODUCTS_SUCCESS:
    case PLACE_ORDER_SUCCESS:
    case FETCH_ORDERS_SUCCESS:
    case UPDATE_ORDER_STATUS_SUCCESS:
    case ADD_PRODUCT_SUCCESS:
    case DELETE_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
