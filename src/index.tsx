import * as React from 'react'
import * as ReactDOM from "react-dom"
import { Router, Route, browserHistory } from 'react-router'

import { buttonsInstance } from './container'
import { Top } from './top'
import { OSSList } from './oss'

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={OSSList} />
        <Route path='/oss' component={OSSList} />
	</Router>,
	document.getElementById("app")
);
