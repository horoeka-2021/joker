import * as actions from './actionTypes'

export const addCart = (item) => {
  return {
    type: actions.ADD_TO_CART,
    id: item.id,
    name: item.name
  }
}

export const delCart = (id) => {
  return {
    type: actions.DEL_TO_CART,
    id: id
  }
}

export const updateQuantities = (cart) => {
  return {
    type: actions.UPDATE_QUANTITIES,
    cart
  }
}

export function navigate (destination) {
  return {
    type: actions.NAVIGATE,
    page: destination // 'home' or 'cart'
  }
}
