import classnames from 'classnames';
import {connect} from 'dva';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import {SvgIcon} from '../../components';
import './index.scss';

function mapStateToProps(state) {
	return {
		loading: state.loading.global
	};
}

class Root extends React.Component {

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
		const {location, loading} = this.props;

		console.log(loading)

		if (loading) NProgress.start();
		if (!loading) NProgress.done();

		const pathname = location.pathname;
		const classConfig = classnames(
				{
					'bg-shape': true,
					'bg-shape__animation': pathname !== '/',
					'bg-shape__intro': pathname === '/home',
					'bg-shape__blog': pathname === '/blog',
					'bg-shape__project': pathname === '/project',
					'bg-shape__contact': pathname === '/contact'
				});

		return (
				<div className="bg-box">
					<SvgIcon className={classConfig} type="bg-shape"/>
				</div>
		);
	}
}

export default connect(mapStateToProps)(Root);