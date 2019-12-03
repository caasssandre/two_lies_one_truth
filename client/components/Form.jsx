import React from 'react'
import {connect} from 'react-redux'
// import socket from '../api/socket'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      // roomId: ''
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
    // this.props.dispatch({
    //   type: 'SAVE_NAME',
    //   name: this.state.name
    // })
    // this.props.dispatch({
    //   type: 'JOIN_ROOM',
    //   room: this.state.roomId
    // })
    // socket.emit('join room', this.state.roomId)
    // addPlayer(this.state.name, this.props.roomName)
    // .then(res=>{
    //   socket.emit('show players', {room: this.props.roomName, names:res})
    // })
  }

  render(){
    // console.log(this.props.roomName)
    return(
      <>
        <h2>You are in room {this.props.roomName}</h2>
        <form onSubmit={this.handleSubmit}>
          {/* <input onChange={this.handleChange} name='roomId' placeholder='enter your room code'></input> */}
          <input onChange={this.handleChange} name='name' placeholder='enter your name'></input><button>Send</button>
        </form>
      </>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    roomName: state.roomName
  }
}

export default connect(mapStateToProps)(Form)