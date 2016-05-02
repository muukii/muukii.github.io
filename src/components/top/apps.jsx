import React from 'react'
import ReactDOM from 'react-dom'

let image = require('../../../resources/img/fil.png')
console.log(image);

export class Apps extends React.Component {
  render() {
    return (
      <div>
        <h1>Apps</h1>
        <img width={95} src={ require('../../../resources/img/fil.png') }></img>
      </div>
    )
  }
}
