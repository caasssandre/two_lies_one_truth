import React from 'react'
import io from 'socket.io-client'
const socket = io()

class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      message : {
        sender: 'cass',
        message:''},
      messages:[]
    }
  }

  handelSubmit = (e) => {
    e.preventDefault()
    socket.emit('chat message', this.state.message)
    this.setState({
      message : {
        sender: 'cass',
        message:''}
    })
  }

  handleChange = (e) => {
    this.setState({
      message : {
        sender: 'cass',
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

  render(){
    return (
      <div>
      <ul id="messages">
        {this.state.messages.map((message, i)=>{
        return <li key={i}>{message.sender + ': '+message.message}</li>
        })}
      </ul>
      <form onSubmit={this.handelSubmit}>
        <input id="m" autoComplete="off" onChange={this.handleChange} value={this.state.message.message}/><button>Send</button>
      </form>
    </div>
    )
  }
}
 

export default Chat