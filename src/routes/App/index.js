import { Layout } from 'antd';
import { Header, Footer } from '../../components';
import './index.scss';

const {Content} = Layout;

export default ({location, children}) => {
	return (
		<Layout className="app-layout">
			<Header location={location}/>
			<Content children={children}/>
			<Footer/>
		</Layout>
	);
}