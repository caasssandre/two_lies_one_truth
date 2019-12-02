import React from 'react'
import {connect} from 'react-redux'
import socket from '../api/socket'


class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      message : {
        sender: '',
        message:''},
      messages:[]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('chat message', this.state.message)
    this.setState({
      message : {
        sender: this.props.name,
        message:''}
    })
  }

  handleChange = (e) => {
    this.setState({
      message : {
        sender: this.props.name,
        message: e.target.value}
    })
  }

  componentDidMount(){
    socket.on('chat message', (msg)=>{
      this.setState({
        messages : [...this.state.messages, msg]
      })
    })
  }

  // componentWillUnmount(){
  //   removePlayer({name : this.props.name, roomCode : 'room1'})
  // }

  render(){
    return (
      <div>
      <h4>Messages</h4>
      <ul id="messages">
        {this.state.messages.map((message, i)=>{
        return <li key={i}>{message.sender + ': '+message.message}</li>
        })}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input id="m" autoComplete="off" onChange={this.handleChange} value={this.state.message.message}/><button>Send</button>
      </form>
    </div>
    )
  }
}
 
function mapStateToProps(state) {
  return {
    name : state.name
  }
}

export default connect(mapStateToProps)(Chat)