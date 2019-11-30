import React from 'react'
import {connect} from 'react-redux'
import io from 'socket.io-client'

const socket = io()

class Confirm extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick = () => {
    socket.emit('start game')
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
    name : state.name
  }
}

export default connect(mapStateToProps)(Confirm)