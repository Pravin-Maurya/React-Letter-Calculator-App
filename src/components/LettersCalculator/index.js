// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    numberOfLetter: 0,
  }

  onChangeInInput = event => {
    this.setState({numberOfLetter: event.target.value.length})
  }

  render() {
    const {numberOfLetter} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-img"
        />
        <div className="card-container">
          <h1 className="calculator-heading">
            Calculate the Letters you enter
          </h1>
          <div className="label-container">
            <label className="phrase" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              className="input-text"
              id="phraseText"
              onChange={this.onChangeInInput}
              placeholder="Enter the phrase"
              type="text"
            />
          </div>
          <p className="letter-count">No.of letters: {numberOfLetter}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
