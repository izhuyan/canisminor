import { connect } from 'dva';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import './index.scss';

function mapStateToProps(state) {
  return {
    loading: state.loading.global,
  };
}

class Root extends React.Component {
  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = nextProps;
    loading ? NProgress.start() : NProgress.done();
  }

  componentWillUnmount() {
    NProgress.start();
  }

  render() {
    const { loading } = this.props;
    loading ? NProgress.start() : NProgress.done();

    return null;
  }
}

export default connect(mapStateToProps)(Root);
