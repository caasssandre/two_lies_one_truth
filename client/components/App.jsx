import React from 'react'
import {connect} from 'react-redux'

import Chat from './Chat'
import Form from './Form'
import Confirm from './Confirm'
import Game from './Game'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
      {this.props.appStatus == 0 && <Form></Form>}
      {this.props.appStatus == 1 && <Confirm></Confirm>}
      {this.props.appStatus == 2 && <Game></Game>}
      {this.props.appStatus == 3 && <Chat></Chat>}
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    appStatus : state.appStatus
  }
}


export default connect(mapStateToProps)(App)
