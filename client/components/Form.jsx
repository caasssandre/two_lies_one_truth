import React from 'react'
import {connect} from 'react-redux'
import io from 'socket.io-client'
const socket = io()

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      name: e.target.value
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
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange}placeholder='enter your name'></input><button>Send</button>
    </form>
    )
  }
}

export default connect()(Form)