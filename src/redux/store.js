import { createStore, combineReducers } from 'redux'
import blog from './blog'
import comment from './comment'

const rootReducer = combineReducers({
  blog,
  comment,
})
const store = createStore(rootReducer)

export default store
