import { Route, Router, Switch } from 'dva/router';
import React from 'react';
import { App, Root, Splash } from './routes';

const PrimaryLayout = () => {
	return (
		<div style={{width: '100%', position: 'relative', overflow: 'hidden'}}>
			<Route path="/" component={Root}/>
			<Switch>
				<Route exact path="/" component={Splash}/>
				<Route path="/:name" component={App}/>
			</Switch>
		</div>
	);
};

export default ({history}) => {

	history.listen((location, action) => window.scrollTo(0, 0));

	return (
		<Router history={history}>
			<PrimaryLayout/>
		</Router>
	);
}
