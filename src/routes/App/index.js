import {BackTop, Layout} from 'antd';
import {Route} from 'dva/router';
import {Footer, Header} from '../../components';
import {Contact, About, Project, Blog} from '../../routes';
import styles from "./index.scss"

const {Content} = Layout;

export default ({location}) => {
	return (
			<Layout className={styles.layout}>
				<BackTop/>
				<Header location={location}/>
				<Content className={styles.content}>
					<Route path="/about" component={About}/>
					<Route exact path="/blog" component={Blog}/>
					<Route exact path="/project" component={Project}/>
					<Route path="/contact" component={Contact}/>
				</Content>
				<Footer/>
			</Layout>
	);
}