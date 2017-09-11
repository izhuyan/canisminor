import { ProList, Title } from '../../components';
import {proList} from '../../config'
import styles from './index.scss';

export default () => {

	const proHeight = (min) => {minHeight: `${parseInt(window.innerHeight) - min}px`;};

	return (
		<div className={styles.project}>
			<Title style={proHeight(150)}
			       title="Sense & pixels"
			       desc="wanna see more ? updating soon..."/>
			<ProList content={proList}/>
		</div>
	);
}