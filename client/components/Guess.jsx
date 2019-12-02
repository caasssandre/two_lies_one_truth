import React from 'react'
import { connect } from 'react-redux'
import { statement } from '@babel/template'

class Guess extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.truthsAndLie.map(tAL => {
          if (tAL.name == this.props.name) {
            return <h2>Thanks for your answers</h2>
          }
          else {
            let statements = ['truth1', 'truth2', 'lie']
            let first = statements.splice(Math.floor(Math.random() * 3), 1)
            let second = statements.splice(Math.floor(Math.random() * 2), 1)
            let third = statements[0]
            return (
              <>
                <h1>{tAL.name}</h1>
                <p id={first}>{tAL.statements[first]}</p>
                <label className="switch">
                  <input type="checkbox"></input>
                    <span className="slider round"></span>
                </label>
                  <p id={second}>{tAL.statements[second]}</p>
                  <label className="switch">
                  <input type="checkbox"></input>
                    <span className="slider round"></span>
                </label>
                  <p id={third}>{tAL.statements[third]}</p>
                  <label className="switch">
                  <input type="checkbox"></input>
                    <span className="slider round"></span>
                </label>
            </>
                )}
              }
            )}
      </div>
            )
          }
        }

function mapStateToProps(state) {
            return {
              name: state.name,
              truthsAndLie: state.truthsAndLie
            }
          }

export default connect(mapStateToProps)(Guess)