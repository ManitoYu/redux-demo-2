export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function addPost(words) {
  return {
    type: ADD_POST,
    words
  }
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  }
}
