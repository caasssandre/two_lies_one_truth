import React from 'react'
import { connect } from 'react-redux'

class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      this.props.truthsAndLie.map(response => {
        let guess = this.props.guesses.find(guess => {
          return guess.name == response.name
        })
        if (guess != undefined) {
          return (
            <>
              <p>{response.name} said {response.statements.lie}, that was a lie.</p>
              {!guess.lie && <h2>Great job, not so easy to fool you...</h2>}
              {guess.lie && <h2>Not quite, that one's a lie!</h2>}
              <p>{response.name} said {response.statements.truth1}, that was true and you guessed {String(guess.truth1)}</p>
              {guess.truth1 && <h2>Well done, that is indeed true.</h2>}
              {!guess.truth1 && <h2>Unbelieveable right? It is the truth though!</h2>}
              <p>{response.name} said {response.statements.truth2}, that was true and you guessed {String(guess.truth2)}</p>
              {guess.truth2 && <h2>For sure! that's the truth</h2>}
              {!guess.truth2 && <h2>They say this one is the truth...</h2>}
            </>
          )
        }
      })
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    guesses: state.guesses,
    truthsAndLie: state.truthsAndLie
  }
}

export default connect(mapStateToProps)(Results)