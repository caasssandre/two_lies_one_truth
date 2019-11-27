import React from 'react'
import {connect} from 'react-redux'
import io from 'socket.io-client'
const socket = io()

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
    socket.emit('join room', 'room1')
    socket.emit('add player', this.state.name)
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