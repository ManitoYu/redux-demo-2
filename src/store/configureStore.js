import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware
// )(createStore)

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
)

export default function configureStrore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)
  return store
}
