import React from 'react'
import { connect } from 'react-redux'
import {addPlayer, getRooms, getPlayers} from '../api/players'
import socket from '../api/socket'
import { get } from 'http'

class Join extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: '',
      message: '',
      name:'',
      players:[]
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    e.persist()
    getRooms().then(res => {
      this.setState({
        message: ''
      })
      if (e.target.id == 'create') {
        if (res.text.includes(this.state.currentRoom)) {
          this.setState({
            message: 'This room code is taken please chose a different one'
          })
        }
        else {
          this.joinRoom()
        }
      }
      if (e.target.id == 'join') {
        if (!res.text.includes(this.state.currentRoom)) {
          this.setState({
            message: 'This room code does not exist, maybe you would like to create a room?'
          })
        }
        else {
          getPlayers(this.state.currentRoom).then(res=>{
            console.log(JSON.parse(res.text))
            if (!JSON.parse(res.text).find(player=>{
              return player.name == this.state.name
            })){
              this.joinRoom()
            }
            else {
              this.setState({
                message: 'This username is taken'
              })
            }
          })
        }
      }
    })
  }

  joinRoom = () =>{
    this.props.dispatch({
      type: 'JOIN_ROOM',
      room: this.state.currentRoom
    })
    socket.emit('join room', this.state.currentRoom)
    this.props.dispatch({
      type: 'INCREMENT_PAGE',
    })
    this.props.dispatch({
      type: 'SAVE_NAME',
      name: this.state.name
    })
    addPlayer(this.state.name, this.state.currentRoom)
    .then(res=>{
      socket.emit('show players', {room: this.state.currentRoom, names:res})
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.message)
    return (
      <>
        <form>
          <input onChange={this.handleChange} value={this.state.currentRoom} name='currentRoom' placeholder='room'></input>
          <input onChange={this.handleChange} value={this.state.name} name='name' placeholder='name'></input>
          <button id='create' onClick={this.handleClick}>Create a new room</button>
          <button id='join' onClick={this.handleClick}>Join existing room</button>
        </form>
        {this.state.message != '' && <h2>{this.state.message}</h2>}
      </>
    )
  }
}

export default connect()(Join)