import {BackTop, Layout} from 'antd';
import {Route} from 'dva/router';
import {Footer, Header} from '../../components';
import {Contact, Home, Project, Blog} from '../../routes';

import './index.scss';

const {Content} = Layout;

export default ({location}) => {

	return (
			<Layout className="app-layout">
				<BackTop/>
				<Header location={location}/>
				<Content className="content">
					<Route path="/home" component={Home}/>
					<Route exact path="/blog" component={Blog}/>
					<Route exact path="/project" component={Project}/>
					<Route path="/contact" component={Contact}/>
				</Content>
				<Footer/>
			</Layout>
	);
}