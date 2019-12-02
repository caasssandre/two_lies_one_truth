import React from 'react'
import { connect } from 'react-redux'

let currentGuess = {
  truth1: false,
  truth2: false,
  lie: false,
}

class Guess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showStatement: -1,
      guesses: []
    }
  }

  componentDidUpdate() {
    if (this.state.showStatement == -1 && this.props.truthsAndLie.length == this.props.players.length) {
      this.setState({
        showStatement: 0
      })
    }
  }

  handleClick = (e) => {
    if (e.target.id == 'submit' && this.state.showStatement < this.props.players.length-2) {
      currentGuess.name = e.target.value
      this.setState({
        showStatement: this.state.showStatement + 1,
        guesses: [...this.state.guesses, currentGuess]
      })
      currentGuess = {
        truth1: false,
        truth2: false,
        lie: false,
      }
    }
    else if (e.target.id == 'submit'){
      this.props.dispatch({
        type:'INCREMENT_PAGE',
      })
      this.props.dispatch({
        type:'SAVE_GUESSES',
        guesses: [...this.state.guesses, currentGuess]
      })
    }
    else {
      currentGuess[e.target.id] = !currentGuess[e.target.id]
    }
  }

  render() {
    console.log(this.state.showStatement)
    console.log(this.props.players.length-2)
    let responses = this.props.truthsAndLie.filter(response => {
      return response.name != this.props.name
    })
    let statements = ['truth1', 'truth2', 'lie']
    let first = statements.splice(Math.floor(Math.random() * 3), 1)
    let second = statements.splice(Math.floor(Math.random() * 2), 1)
    let third = statements[0]
    return (
      <>
        {this.state.showStatement == -1 && <h1>Please wait while everyone responds</h1>}
        {/* {this.state.showStatement == -2 && } */}
        {this.state.showStatement >= 0 &&
          <>
            <h1>{responses[this.state.showStatement].name}</h1>
            <p id={first}>{responses[this.state.showStatement].statements[first]}</p>
            <label className='toggle-label'>
              <input type='checkbox' id={first} onClick={this.handleClick}></input>
              <span className='back'>
                <span className='toggle'></span>
                <span className='label on'>Truth</span>
                <span className='label off'>Lie</span>
              </span>
            </label>
            <p id={second}>{responses[this.state.showStatement].statements[second]}</p>
            <label className='toggle-label'>
              <input type='checkbox' id={second} onClick={this.handleClick}></input>
              <span className='back'>
                <span className='toggle'></span>
                <span className='label on'>Truth</span>
                <span className='label off'>Lie</span>
              </span>
            </label>
            <p id={third}>{responses[this.state.showStatement].statements[third]}</p>
            <label className='toggle-label'>
              <input type='checkbox' id={third} onClick={this.handleClick}></input>
              <span className='back'>
                <span className='toggle'></span>
                <span className='label on'>Truth</span>
                <span className='label off'>Lie</span>
              </span>
            </label>
            <button id={"submit"} value={responses[this.state.showStatement].name} onClick={this.handleClick}>Submit</button>
          </>
          }

      </>







      // <div>
      //   {this.props.truthsAndLie.map(tAL => {
      //     if (tAL.name == this.props.name) {
      //       return <h2>Thanks for your answers</h2>
      //     }
      //     else {
      //       let statements = ['truth1', 'truth2', 'lie']
      //       let first = statements.splice(Math.floor(Math.random() * 3), 1)
      //       let second = statements.splice(Math.floor(Math.random() * 2), 1)
      //       let third = statements[0]
      //       return (
      //         <>
      //           <h1>{tAL.name}</h1>
      //           <p id={first}>{tAL.statements[first]}</p>
      //           <label className='toggle-label'>
      //             <input type='checkbox' id={first} onClick={this.handleClick}></input>
      //             <span className='back'>
      //               <span className='toggle'></span>
      //               <span className='label on'>Truth</span>
      //               <span className='label off'>Lie</span>
      //             </span>
      //           </label>
      //           <p id={second}>{tAL.statements[second]}</p>
      //           <label className='toggle-label'>
      //             <input type='checkbox' id={second} onClick={this.handleClick}></input>
      //             <span className='back'>
      //               <span className='toggle'></span>
      //               <span className='label on'>Truth</span>
      //               <span className='label off'>Lie</span>
      //             </span>
      //           </label>
      //           <p id={third}>{tAL.statements[third]}</p>
      //           <label className='toggle-label'>
      //             <input type='checkbox' id={third} onClick={this.handleClick}></input>
      //             <span className='back'>
      //               <span className='toggle'></span>
      //               <span className='label on'>Truth</span>
      //               <span className='label off'>Lie</span>
      //             </span>
      //           </label>
      //           <button id={"submit"} value={tAL.name} onClick={this.handleClick}>Submit</button>
      //         </>
      //       )
      //     }
      //   }
      //   )}
      // </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    truthsAndLie: state.truthsAndLie,
    players: state.players
  }
}

export default connect(mapStateToProps)(Guess)