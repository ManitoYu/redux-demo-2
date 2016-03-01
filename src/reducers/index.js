import { combineReducers } from 'redux'
import { ADD_POST, REMOVE_POST } from '../actions'
import Immutable from 'immutable'

let initialState = Immutable.List()

let uniqueId = (() => {
  let id = 0
  return () => ++ id
})()

function posts(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return state.push({ id: uniqueId(), words: action.words })
    case REMOVE_POST:
      return state.filter(item => item.id != action.id)
    default:
      return state
  }
}

export default combineReducers({ posts })
