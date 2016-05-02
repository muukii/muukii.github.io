import * as React from "react";
import * as ReactDOM from "react-dom";
import { Jumbotron, Button } from "react-bootstrap";

export interface GreetingProps {

}

export interface GreetingState {

}

export class Greeting extends React.Component<GreetingProps, GreetingState> {
  render() {
    return (
      <div>
        <h1>Hi, I'm muukii</h1>
      </div>
    );
  }
}
