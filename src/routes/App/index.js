import { BackTop, Layout } from 'antd';
import { Switch } from 'dva/router';
import { Background, Footer, Header, Loading, Component } from '../../components';
import classnames from 'classnames';
import scrollHandler from '../../utils/scroll';
import styles from './index.scss';

const { Content } = Layout;

class App extends Component {
  componentWillMount() {
    window.addEventListener('scroll', scrollHandler);
  }
  componentDidMount() {
    scrollHandler();
  }
  render() {
    return (
      <Layout className={styles.view}>
        <Loading />
        <BackTop style={{ zIndex: 999 }} />
        <Background />
        <Switch>{this.props.children}</Switch>
      </Layout>
    );
  }
}

App.Body = ({ children }) => (
  <Layout className={styles.layout}>
    <Header />
    <Content className={classnames(styles.content, 'showup')}>
      <Switch>{children}</Switch>
    </Content>
    <Footer />
  </Layout>
);

export default App;
