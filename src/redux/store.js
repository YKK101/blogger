import { createStore, combineReducers } from 'redux'
import blog from './blog'

const rootReducer = combineReducers({ blog })
const store = createStore(rootReducer)

export default store
