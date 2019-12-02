import React from 'react'
import {connect} from 'react-redux'

import socket from '../api/socket'

class Confirm extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick = () => {
    socket.emit('start game', this.props.room)
  }

  componentDidMount(){
    socket.on('start game', (players)=>{
      this.props.dispatch({type: 'ADD_PLAYERS', players}),
      this.props.dispatch({
        type:'INCREMENT_PAGE',
      })
    })
  }

  render(){
    return (
      <button onClick={this.handleClick}>Everyone is in!!</button>
    )
  }
}

function mapStateToProps(state) {
  return {
    name : state.name,
    room : state.roomName
  }
}

export default connect(mapStateToProps)(Confirm)