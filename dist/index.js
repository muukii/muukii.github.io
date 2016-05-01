"use strict";
var React = require('react');
var ReactDOM = require("react-dom");
var react_router_1 = require('react-router');
var top_index_tsx_1 = require('./components/top/top_index.tsx');
ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, 
    React.createElement(react_router_1.Route, {path: '/', component: top_index_tsx_1.Top})
), document.getElementById("app"));
//# sourceMappingURL=index.js.map