import React from "react";
import ReactDOM from "react-dom";
import { Jumbotron, Button } from "react-bootstrap";

export class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi, I'm muukii</h1>
        <p>I’m iOS Developer.<br/>
          I currently work at eureka.<br/>
          My favorite guitar is Suhr.
        </p>
      </div>
    );
  }
}
