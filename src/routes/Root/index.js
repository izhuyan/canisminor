import { connect } from 'dva';
import {Background} from '../../components';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';

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
		const {loading,location} = this.props;

		if (loading) NProgress.start();
		if (!loading) NProgress.done();

		return <Background location={location} />
	}
}

export default connect(mapStateToProps)(Root);