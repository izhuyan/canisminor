import dynamic from 'dva/dynamic';

export {default as Root} from './Root'

const App = dynamic({component: () => import('./App')});
const Splash = dynamic({component: () => import('./Splash')});
const Home = dynamic({component: () => import('./Home')});
const Project = dynamic({component: () => import('./Project')});
const Contact = dynamic({component: () => import('./Contact')});
const Blog = dynamic({component: () => import('./Blog')});
const BlogPage = dynamic({component: () => import('./BlogPage')});
export {App, Splash, Home, Project, Contact, Blog, BlogPage};