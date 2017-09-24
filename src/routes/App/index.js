import { BackTop, Layout } from 'antd';
import dynamic from 'dva/dynamic';
import { Route } from 'dva/router';
import { Footer, Header } from '../../components';
import styles from './index.scss';

const { Content } = Layout;

export default ({ location }) => {
  const About = dynamic({ component: () => import('../About') });
  const Project = dynamic({ component: () => import('../Project') });
  const Contact = dynamic({ component: () => import('../Contact') });
  const Blog = dynamic({ component: () => import('../Blog') });
  const BlogPage = dynamic({ component: () => import('../BlogPage') });

  return (
    <Layout className={styles.layout}>
      <BackTop style={{ zIndex: 999 }} />
      <Header location={location} />
      <Content className={styles.content}>
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:name" component={BlogPage} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Content>
      <Footer />
    </Layout>
  );
};
