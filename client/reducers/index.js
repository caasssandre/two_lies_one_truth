import {combineReducers} from 'redux'

// import otherReducer from './other-reducer'
import appStatus from './appStatus'  
import name from './name'  
import players from './players'  
import truthsAndLie from './truthsAndLie'  

export default combineReducers({
  appStatus,
  name,
  players,
  truthsAndLie
})