import dynamic from 'dva/dynamic';
import { Route, Router } from 'dva/router';
import App from './routes/App';

export default ({ app, history }) => {
  history.listen(() => window.scrollTo(0, 0));

  const Splash = dynamic({
    app,
    component: () => import('./routes/Splash'),
  });
  const About = dynamic({
    app,
    component: () => import('./routes/About'),
  });
  const Blog = dynamic({
    app,
    models: () => [import('./models/getBlogToc')],
    component: () => import('./routes/Blog'),
  });
  const BlogPage = dynamic({
    app,
    models: () => [import('./models/getBlogPage')],
    component: () => import('./routes/BlogPage'),
  });
  const Project = dynamic({
    app,
    models: () => [import('./models/getProjectToc')],
    component: () => import('./routes/Project'),
  });
  const Contact = dynamic({
    app,
    component: () => import('./routes/Contact'),
  });
  const Wechat = dynamic({
    app,
    component: () => import('./routes/Wechat'),
  });
  const Dev = dynamic({
    app,
    component: () => import('./routes/Dev'),
  });
  const NotFound = dynamic({
    app,
    component: () => import('./routes/404'),
  });

  return (
    <Router history={history}>
      <App>
        <Route exact path="/" component={Splash} />
        <App.Body>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:name" component={BlogPage} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/wechat" component={Wechat} />
          <Route exact path="/dev" component={Dev} />
          <Route component={NotFound} />
        </App.Body>
      </App>
    </Router>
  );
};
