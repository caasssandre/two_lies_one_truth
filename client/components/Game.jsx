import React from 'react'
import {connect} from 'react-redux'


class Game extends React.Component{
  constructor(props){
    super(props)
    this.state={
      truth1:'',
      truth2:'',
      lie:'',
    }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.dispatch({
      type:'ADD_RESPONSE',
      response:{
        statements: this.state,
        name:this.props.name
      }
    })
  }

  render(){
    console.log(this.props.name)
    return(
      <>
  <h1>Hi, {this.props.name} write two truths and one lie about yourself</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} name="lie" placeholder="this is a lie" value={this.state.lie}></input>
        <input type="text" onChange={this.handleChange} name="truth1" placeholder="this is a truth" value={this.state.truth1}></input>
        <input type="text" onChange={this.handleChange} name="truth2" placeholder="this is a truth" value={this.state.truth2}></input>
        <button type="submit">Submit</button>
      </form>
      </>
    )
  }
}

function mapStateToProps(state){
  return {
    //players : state.players,
    name : state.name
  }
}


export default connect(mapStateToProps)(Game)