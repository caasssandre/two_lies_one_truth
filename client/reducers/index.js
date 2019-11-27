import {combineReducers} from 'redux'

// import otherReducer from './other-reducer'
import appStatus from './appStatus'  
import name from './name'  
import players from './players'  

export default combineReducers({
  appStatus,
  name,
  players
})