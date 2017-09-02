import React from 'react';
import { Router, Route } from 'dva/router';
import * as R from './routes';

export default ({history}) => {
	return (
		<Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
			<Route component={R.Root}>
				<Route path="/" component={R.Splash}/>
				<Route component={R.App}>
					<Route path="/home" component={R.Home}/>
					<Route path="/project" component={R.Project}/>
				</Route>
			</Route>
		</Router>
	);
}
