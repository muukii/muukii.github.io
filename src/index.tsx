import * as React from 'react'
import * as ReactDOM from "react-dom"
import { Router, Route, browserHistory } from 'react-router'
import { Top } from './components/top/top_index.tsx'

console.log("load")

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={Top} />
	</Router>,
	document.getElementById("app")
);
