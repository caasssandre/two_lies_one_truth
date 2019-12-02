import React from 'react'
import {connect} from 'react-redux'
import {addPlayer} from '../api/players'
import socket from '../api/socket'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      roomId: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.dispatch({
      type:'INCREMENT_PAGE',
    })
    this.props.dispatch({
      type: 'SAVE_NAME',
      name: this.state.name
    })
    this.props.dispatch({
      type: 'JOIN_ROOM',
      room: this.state.roomId
    })
    socket.emit('join room', this.state.roomId)
    addPlayer(this.state.name, this.state.roomId)
    .then(res=>{
      socket.emit('show players', {room: this.state.roomId, names:res})
    })
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} name='roomId' placeholder='enter your room code'></input>
      <input onChange={this.handleChange} name='name' placeholder='enter your name'></input><button>Send</button>
    </form>
    )
  }
}

export default connect()(Form)