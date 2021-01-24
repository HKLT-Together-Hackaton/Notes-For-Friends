import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import messageReducer from './messages'
import user from './user'

const reducer = combineReducers({
  user,
  messages: messageReducer,
})

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export default store
