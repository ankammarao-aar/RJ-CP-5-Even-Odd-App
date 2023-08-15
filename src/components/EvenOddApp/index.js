// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    const even = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="even-odd">Count is {even}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
        </div>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
