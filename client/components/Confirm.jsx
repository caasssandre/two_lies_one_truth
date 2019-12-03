import React from 'react'
import {connect} from 'react-redux'

import socket from '../api/socket'

class Confirm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      players:[]
    }
  }

  handleClick = () => {
    socket.emit('start game', this.props.room)
  }

  componentDidMount(){
    socket.on('start game', (players)=>{
      this.props.dispatch({
        type: 'ADD_PLAYERS', players
      }),
      this.props.dispatch({
        type:'INCREMENT_PAGE',
      })
    })
    socket.on('show players', (players)=>{
      this.setState({
        players: players
      })
    })
  }

  render(){
    return (
      <>
      <h2>You are in room {this.props.room}</h2>
      <button onClick={this.handleClick}>Everyone is in!!</button>
      {this.state.players.map(player=>{
        if(player.name != this.props.name){
          return <h2>{player.name} has joined!</h2>
        }
      })}
      </>
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