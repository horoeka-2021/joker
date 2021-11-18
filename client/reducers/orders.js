import { FETCH_ORDERS_SUCCESS, UPDATE_ORDER_STATUS_SUCCESS } from '../actions/orders'

function orders (state = [], action) {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return action.orders
    case UPDATE_ORDER_STATUS_SUCCESS:
      return getUpdatedOrders(state, action.order)

    default:
      return state
  }
}

export default orders

export function getUpdatedOrders (orders, updatedOrder) {
  const { id, newStatus } = updatedOrder
  return orders.map(order => {
    const status = (order.id === id) ? newStatus : order.status
    return { ...order, status }
  })
}
