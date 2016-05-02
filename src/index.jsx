import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Top } from './components/top/top_index'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={Top} />
	</Router>,
	document.getElementById("app")
);
