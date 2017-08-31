import React from 'react';
import { Router, Route } from 'dva/router';
import * as R from './routes';

export default ({history}) => {
	return (
		<Router history={history}>
			<Route path="/" component={R.Splash}/>
			<Route component={R.App}>
			<Route path="/home" component={R.Home}/>
			</Route>
		</Router>
	);
}
