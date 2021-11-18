import * as actions from '../actions/actionTypes'

const initialState = 'home'

export default function activePage (state = initialState, action) {
  switch (action.type) {
    case actions.NAVIGATE:
      return action.page
    default:
      return state
  }
}
