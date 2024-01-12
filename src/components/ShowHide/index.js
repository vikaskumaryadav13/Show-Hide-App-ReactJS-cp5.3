// Write your code here
import {Component} from 'react'
import './index.css'

class showHide extends Component {
  state = {isFirstName: false, isLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>

          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default showHide
