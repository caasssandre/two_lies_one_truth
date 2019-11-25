const reducer = (state = '', action) => {
  switch (action.type){
    case 'SAVE_NAME':{
      return action.name
    }
    default: return state
  }
}

export default reducer