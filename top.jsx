import React from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const jumbotronInstance = (
  <Jumbotron>
    <h1>Hello, I'm muukii</h1>
    <p>This page is built by React + Babel + webpack</p>    
  </Jumbotron>
);

ReactDOM.render(jumbotronInstance, document.getElementById('top'));
