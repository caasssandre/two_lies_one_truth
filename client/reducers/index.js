import {combineReducers} from 'redux'

// import otherReducer from './other-reducer'
import appStatus from './appStatus'  
import name from './name'  

export default combineReducers({
  appStatus,
  name
})