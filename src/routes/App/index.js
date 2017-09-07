import { BackTop, Layout } from 'antd';
import { Route } from 'dva/router';
import { Footer, Header } from '../../components';
import { Contact, Home, Project } from '../../routes';

import './index.scss';

const {Content} = Layout;

export default ({location}) => {

	return (
		<Layout className="app-layout">
			<BackTop/>
			<Header location={location}/>
			<Content className="content">
				<Route exact path="/home" component={Home}/>
				<Route exact path="/project" component={Project}/>
				<Route exact path="/contact" component={Contact}/>
			</Content>
			<Footer/>
		</Layout>
	);
}