import React from 'react'
import io from 'socket.io-client'
const socket = io()

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message : '',
      messages:[]
    }
  }

  handelSubmit = (e) => {
    e.preventDefault()
    socket.emit('chat message', this.state.message)
    this.setState({
      message : ''
    })
  }

  handleChange = (e) => {
    this.setState({
      message : e.target.value
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
        return <li key={i}>{message}</li>
        })}
      </ul>
      <form onSubmit={this.handelSubmit}>
        <input id="m" autoComplete="off" onChange={this.handleChange} value={this.state.message}/><button>Send</button>
      </form>
    </div>
    )
  }
}
export default App
