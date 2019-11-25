import React from 'react'
import Chat from './Chat'
import Form from './Form'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page:0
    }
  }
  render(){
    return(
      <>
      {this.state.page == 0 && <Form></Form>}
      {this.state.page == 1 && <Chat></Chat>}
      </>
    )
  }
}
export default App
