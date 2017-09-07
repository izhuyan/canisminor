import dynamic from 'dva/dynamic';

const Splash  = dynamic({component: () => import('./Splash')});
const Home    = dynamic({component: () => import('./Home')});
const Project = dynamic({component: () => import('./Project')});
const Contact = dynamic({component: () => import('./Contact')});
const Root    = dynamic({component: () => import('./Root')});
const App     = dynamic({component: () => import('./App')});

export { Splash, Home, Project, Contact, Root, App };