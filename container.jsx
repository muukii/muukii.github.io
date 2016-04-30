import React from 'react'
import ReactDOM from 'react-dom'

class Container extends React.Component {
  render() {
    return (
      <h1>Open Source Libraries</h1>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('container')
)
