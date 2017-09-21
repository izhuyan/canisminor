import { connect } from 'dva';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
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

	componentWillUnmount() {
		NProgress.start();
	}

	componentDidMount() {
		NProgress.done();
	}

	componentWillReceiveProps(nextProps) {
		const {loading} = nextProps;
		(loading)
			? NProgress.start()
			: NProgress.done();
	}

	render() {
		const {loading} = this.props;
		(loading)
			? NProgress.start()
			: NProgress.done();

		return null;
	}
}

export default connect(mapStateToProps)(Root);