import { Icon } from '../';
import styles from './index.scss';

export default ({content}) => {
	return (
		<div className={styles.header}>
			<div className={styles.icon}>
				<Icon type={`doc-${content.type}`}/>
			</div>
			<div className={styles.title}>{content.text.toUpperCase()}</div>
			<div className={styles.desc}>{content.desc}</div>
		</div>
	)
		;
}