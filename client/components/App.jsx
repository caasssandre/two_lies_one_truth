import React from 'react'
import {connect} from 'react-redux'


import Join from './Join'
// import Form from './Form'
import Confirm from './Confirm'
import Game from './Game'
import Guess from './Guess'
import Results from './Results'

class App extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <>
      {this.props.appStatus == 0 && <Join></Join>}
      {/* {this.props.appStatus == 0 && <Form></Form>} */}
      {this.props.appStatus == 1 && <Confirm></Confirm>}
      {this.props.appStatus == 2 && <Game></Game>}
      {this.props.appStatus == 3 && <Guess></Guess>}
      {this.props.appStatus == 4 && <Results></Results>}
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    appStatus : state.appStatus,
    name : state.name
  }
}


export default connect(mapStateToProps)(App)
