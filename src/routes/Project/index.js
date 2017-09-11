import { ProList, Title } from '../../components';
import { proList } from '../../config';
import { Height } from '../../utils/window';
import styles from './index.scss';

export default () => {
	return (
		<div className={styles.project}>
			<Title style={Height(150)}
			       title="Sense & pixels"
			       desc="wanna see more ? updating soon..."/>
			<ProList content={proList}/>
		</div>
	);
}