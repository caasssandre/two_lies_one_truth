const reducer = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT_PAGE':{
      return state += 1
    }
    default: return state
  }
}

export default reducer