import classnames from 'classnames';
import { connect } from 'dva';
import { Route } from 'dva/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import { SvgIcon } from '../../components';
import { App, Splash } from '../../routes';
import './index.scss';

let lastHref;

class Root extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {location, loading} = this.props;
		const pathname            = location.pathname;
		const classConfig         = classnames(
			{
				'bg-shape'           : true,
				'bg-shape__animation': pathname !== '/',
				'bg-shape__intro'    : pathname === '/home',
				'bg-shape__project'  : pathname === '/project',
				'bg-shape__contact'  : pathname === '/contact'
			});

		const href = window.location.href;

		if (lastHref !== href) {
			NProgress.start();
			if (!loading.global) {
				NProgress.done();
				lastHref = href;
			}
		}

		return (
			<div className="root">
				<div className="bg-box">
					<SvgIcon className={classConfig} type="bg-shape"/>
				</div>
				<Route exact path="/" component={Splash}/>
				<Route exact path="/(:name)" component={App}/>
			</div>
		);
	}
}

export default connect(({loading}) => {return {loading};})(Root);
