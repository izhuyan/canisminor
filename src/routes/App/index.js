import { Layout,BackTop } from 'antd';
import { Header, Footer } from '../../components';

import './index.scss';

const {Content} = Layout;

export default ({location, children}) => {

	return (
		<Layout className="app-layout">
			<BackTop />
			<Header location={location}/>
			<Content className="content" children={children}/>
			<Footer/>
		</Layout>
	);
}