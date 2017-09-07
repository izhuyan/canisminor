import { Route, Router, Switch } from 'dva/router';
import React from 'react';
import { Root } from './routes';

export default ({history, app}) => {

	return (
		<Router history={history}>
			<Switch>
				<Route exact component={Root}/>
			</Switch>
		</Router>
	);
}
