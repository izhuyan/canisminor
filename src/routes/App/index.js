import {Layout} from 'antd';
import dynamic from 'dva/dynamic';
import {Route, Switch} from 'dva/router';
import {Footer, Header} from '../../components';
import styles from './index.scss';

const {Content} = Layout;
const About = dynamic({component: () => import('../About')});
const Project = dynamic({component: () => import('../Project')});
const Contact = dynamic({component: () => import('../Contact')});
const Blog = dynamic({component: () => import('../Blog')});
const BlogPage = dynamic({component: () => import('../BlogPage')});
const NotFound = dynamic({component: () => import('../404')});

export default () => {
  return (
    <Layout className={styles.layout}>
      <Header/>
      <Content className={styles.content}>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/blog/:name" component={BlogPage}/>
          <Route exact path="/project" component={Project}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </Content>
      <Footer/>
    </Layout>
  );
};
