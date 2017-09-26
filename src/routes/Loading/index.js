import {connect} from 'dva';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Component} from 'react';
import './index.scss';

const State = state => ({loading: state.loading.global});

class Root extends Component {
  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  componentWillReceiveProps(nextProps) {
    const {loading} = nextProps;
    loading ? NProgress.start() : NProgress.done();
  }

  componentWillUnmount() {
    NProgress.start();
  }

  render() {
    const {loading} = this.props;
    loading ? NProgress.start() : NProgress.done();
    return null;
  }
}

export default connect(State)(Root);
