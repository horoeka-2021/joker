import { combineReducers } from 'redux'

// import otherReducer from './other-reducer'
import cart from './cart'
import activePage from './activePage'

export default combineReducers({
  cart,
  activePage
})
