const reducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_RESPONSE':{
      return [...state, action.response]
    }
    default: return state
  }
}

export default reducer