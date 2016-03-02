import PostsService from '../services/posts.service'
import co from 'co'
import 'babel-polyfill'

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const SET_POST_EDITING = 'SET_POST_EDITING'
export const UPDATE_WORDS = 'UPDATE_WORDS'
export const GET_POSTS = 'GET_POSTS'
export const SAVE_POST = 'SAVE_POST'
export const SET_POST_COMPLETED = 'SET_POST_COMPLETED'

export function addPost(words) {
  return dispatch => {
    co(function* () {
      let fd = new FormData()
      fd.append('words', words)
      let post = yield PostsService.addPost(fd)
      dispatch({ type: ADD_POST, post })
    })
  }
}

export function removePost(id) {
  return dispatch => {
    co(function* () {
      yield PostsService.removePost(id)
      dispatch({ type: REMOVE_POST, id })
    })
  }
}

export function setPostEditing(id, editing) {
  return {
    type: SET_POST_EDITING,
    id,
    editing
  }
}

export function updateWords(id, words) {
  return {
    type: UPDATE_WORDS,
    id,
    words
  }
}

export function savePost(id, words) {
  return dispatch => {
    co(function* () {
      yield PostsService.savePost(id, { words: words })
      dispatch(setPostEditing(id, false))
    })
  }
}

export function getPosts() {
  return dispatch => {
    co(function* () {
      let posts = yield PostsService.getPosts()
      dispatch({ type: GET_POSTS, posts })
    })
  }
}

export function setPostCompleted(id, completed) {
  return {
    type: SET_POST_COMPLETED,
    id,
    completed
  }
}
