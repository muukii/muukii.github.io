"use strict";
var React = require('react');
var ReactDOM = require("react-dom");
var react_router_1 = require('react-router');
var oss_1 = require('./oss');
ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, 
    React.createElement(react_router_1.Route, {path: '/', component: oss_1.OSSList}), 
    React.createElement(react_router_1.Route, {path: '/oss', component: oss_1.OSSList})), document.getElementById("app"));
//# sourceMappingURL=index.js.map