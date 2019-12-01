import React from 'react'
import {connect} from 'react-redux'

class Guess extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <h1>Guess!!</h1>
    )
  }
}

function mapStateToProps(state){
  return{
    statements: state.statements
  }
}

export default connect(mapStateToProps)(Guess)