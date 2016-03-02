import { combineReducers } from 'redux'
import { ADD_POST, REMOVE_POST, SET_POST_EDITING, UPDATE_WORDS, GET_POSTS, SET_POST_COMPLETED } from '../actions'
import Immutable from 'immutable'

let initialState = Immutable.List()

function posts(state = initialState, action) {
  switch(action.type) {
    case GET_POSTS:
      return Immutable.List.of(...action.posts)
    case ADD_POST:
      return state.push(Object.assign(action.post, { editing: false, completed: false }))
    case REMOVE_POST:
      return state.filter(item => item.id != action.id)
    case SET_POST_EDITING:
      return state.map(item => item.id == action.id ? Object.assign({}, item, { editing: action.editing }) : item)
    case SET_POST_COMPLETED:
      return state.map(item => item.id == action.id ? Object.assign({}, item, { completed: action.completed }) : item)
    case UPDATE_WORDS:
      return state.map(item => item.id == action.id ? Object.assign({}, item, { words: action.words }) : item)
    default:
      return state
  }
}

export default combineReducers({ posts })
