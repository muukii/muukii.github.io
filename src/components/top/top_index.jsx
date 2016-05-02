import React from "react";
import ReactDOM from "react-dom";
import { Greeting } from "./greeting";
import { Apps } from "./apps";
import { OSSList } from "./oss";

export class Top extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row greeting">
          <Greeting />
        </div>
        <div className="row apps">
          <Apps />
        </div>
        <div className="row opensourcelibraries">
          <OSSList />
        </div>
        <div className="row links">
        </div>
      </div>
    );
  }
}

// http://v4-alpha.getbootstrap.com/layout/grid/
// http://websae.net/twitter-bootstrap-grid-system-21060224/
