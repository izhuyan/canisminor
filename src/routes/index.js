import dynamic from 'dva/dynamic';

export { default as Root } from './Root';
export { default as Splash } from './Splash';
export { default as App } from './App';
export { default as About } from './About';
export { default as Blog } from './Blog';
export { default as Project } from './Project';
export { default as Contact } from './Contact';

//const App = dynamic({component: () => import('./App')});
//const Splash = dynamic({component: () => import('./Splash')});
//const About = dynamic({component: () => import('./About')});
//const Project  = dynamic({component: () => import('./Project')});
//const Contact  = dynamic({component: () => import('./Contact')});
//const Blog     = dynamic({component: () => import('./Blog')});

const BlogPage = dynamic({component: () => import('./BlogPage')});

export { BlogPage };