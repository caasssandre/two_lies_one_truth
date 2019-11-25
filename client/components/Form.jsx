import React from 'react'

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
    console.log(this.state.name)
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange}placeholder='enter your name'></input><button>Send</button>
    </form>
    )
  }
}

export default Form