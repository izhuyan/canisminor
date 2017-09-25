import { Route, Router, Switch } from 'dva/router';
import React from 'react';
import { Background } from './components';
import App from './routes/App';
import Loading from './routes/Loading';
import Splash from './routes/Splash';

const PrimaryLayout = () => {
  return (
    <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <Route component={Loading} />
      <Background location={window.location} />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/:name" component={App} />
      </Switch>
    </div>
  );
};

export default ({ history }) => {
  history.listen(() => window.scrollTo(0, 0));

  return (
    <Router history={history}>
      <PrimaryLayout />
    </Router>
  );
};
