import { Command, Title } from '../../components';
import styles from './index.scss';

export default () => (
	<div className={styles.contact}>
		<Title className={styles.title}
		       title="Let's talk"
		       desc="u can comment with github accounts"/>
		<Command/>
	</div>
)