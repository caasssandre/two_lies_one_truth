const reducer = (state = '', action) => {
  switch (action.type){
    case 'JOIN_ROOM':{
      return action.room
    }
    default: return state
  }
}

export default reducer