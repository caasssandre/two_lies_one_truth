import React from 'react'
import { connect } from 'react-redux'

class Results extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      this.props.players.map(player=>{
        return (
        <h3>{player.name}</h3>
        )
      })
    )
  }
}

function mapStateToProps(state){
  return{
    players:state.players
  }
}

export default connect (mapStateToProps)(Results)