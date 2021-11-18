import * as actions from '../actions/actionTypes'

const initialState = [
]

function cart (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      if (state.length === 0 || state.find((obj) => obj.id === action.id) === undefined) {
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            quantity: 1
          }
        ]
      } else {
        return state.map(obj => obj.id === action.id ? { ...obj, quantity: Number(obj.quantity) + 1 } : obj)
      }
    case actions.DEL_TO_CART:
      return state.filter(obj => obj.id !== action.id)

    case actions.UPDATE_QUANTITIES:
      return action.cart

    default:
      return state
  }
}

export default cart
