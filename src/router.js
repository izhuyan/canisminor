import { Route, Router, Switch } from 'dva/router';
import {Root} from './routes'
import React from 'react';

export default ({history, app}) => {

	return (
		<Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
			<Switch>
				<Route exact component={Root}/>
			</Switch>
		</Router>
	);
}
