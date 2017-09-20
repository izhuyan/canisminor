import { Link } from 'dva/router';
import { Typist } from '../../components';
import { indexPage } from '../../config';
import styles from './index.scss';
import { Redirect } from 'dva/router';
export default () => {
	return (
		<Link className={styles.splash} to={indexPage}>
			<div className={styles.logo}/>
			<Typist className={styles.text}
			        onTypingDone={() => window.location.href='/about'}>
				<span className={styles.shape}/>
				The collection of curriculum vitae and<br/> recent projects
			</Typist>
		</Link>
	);
}

