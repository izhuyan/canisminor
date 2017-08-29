import { Layout } from 'antd';
import { Header, Footer } from '../../components';

const {Content} = Layout;

export default ({children}) => {
	return (
		<Layout>
			<Header/>
			<Content>
				{children}
			</Content>
			<Footer/>
		</Layout>
	);
}