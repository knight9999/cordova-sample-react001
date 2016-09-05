import React from 'react'
import ReactDOM from 'react-dom'

class World extends React.Component {
  buttonClicked(message) {
    alert(message);
  }
  render() {
    return (<div>
      <h1>World</h1>
      <button onClick={() => this.buttonClicked('OK !')}>Click</button>
      </div>
    )
  }
}

module.exports = World

// ReactDOM.render(
//   <World />,
//   document.getElementById('world')
// )
