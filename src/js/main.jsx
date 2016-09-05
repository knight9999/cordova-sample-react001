import Hello from './hello.jsx'
import World from './world.jsx'
import React from 'react'
import ReactDOM from 'react-dom'


module.exports = {
  run: () => {
    ReactDOM.render(
      <Hello />,
      document.getElementById('hello')
    )

    ReactDOM.render(
      <World />,
      document.getElementById('world')
    )
  }
}

// document.addEventListener('deviceready', () => {
//
//   ReactDOM.render(
//     <Hello />,
//     document.getElementById('hello')
//   )
//
//   ReactDOM.render(
//     <World />,
//     document.getElementById('world')
//   )
//
//    }
//  ,false)
