import classnames from 'classnames';
import { connect } from 'dva';
import { Route } from 'dva/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import { SvgIcon } from '../../components';
import './index.scss';

class Root extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {location, loading} = this.props;

		NProgress.start();
		!loading.global && NProgress.done();

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
			<div className="bg-box">
				<SvgIcon className={classConfig} type="bg-shape"/>
			</div>
		);
	}
}

export default connect(({loading}) => {return {loading};})(Root);
