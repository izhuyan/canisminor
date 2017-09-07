import classnames from 'classnames';
import { Route } from 'dva/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import { SvgIcon } from '../../components';
import { App, Splash } from '../../routes';
import './index.scss';

export default class extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();
	}

	componentDidMount() {
		NProgress.done();
	}

	render() {
		const {location}  = this.props;
		const pathname    = location.pathname;
		const classConfig = classnames(
			{
				'bg-shape'           : true,
				'bg-shape__animation': pathname !== '/',
				'bg-shape__intro'    : pathname === '/home',
				'bg-shape__project'  : pathname === '/project',
				'bg-shape__contact'  : pathname === '/contact'
			});

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