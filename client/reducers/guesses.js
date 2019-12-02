const reducer = (state = [], action) => {
  switch (action.type){
    case 'SAVE_GUESSES':{
      return action.guesses
    }
    default: return state
  }
}

export default reducer