import React from 'react'
import {connect} from 'react-redux'


class Game extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.name)
    return(
      <>
      <h2>{this.props.name}</h2>
      <ul>
      {this.props.players.map(player=>{
      return <li>{player.name}</li>
      })}
      </ul>
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    players : state.players,
    name : state.name
  }
}


export default connect(mapStateToProps)(Game)