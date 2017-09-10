import {Route, Router, Switch} from 'dva/router';
import React from 'react';
import {App, Root, Splash} from './routes';

const PrimaryLayout = () => {

	return (
			<div className="root">
				<Route path="/" component={Root}/>
				<Switch>
					<Route exact path="/" component={Splash}/>
					<Route path="/:name" component={App}/>
				</Switch>
			</div>
	);
};

export default ({history}) => {

	history.listen((location, action) => window.scrollTo(0, 0))

	return (
			<Router history={history} onUpdate={() => {
				console.log("test")
			}}>
				<PrimaryLayout/>
			</Router>
	);
}
