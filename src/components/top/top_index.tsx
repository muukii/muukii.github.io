import * as React from "react";
import * as ReactDOM from "react-dom";
import { Greeting } from "./greeting.tsx";
import { Apps } from "./apps.tsx";
import { OSSList } from "./oss.tsx";

export interface TopProps {
}

export interface TopState {
}

export class Top extends React.Component<TopProps, TopState> {
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
