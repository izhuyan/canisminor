import { Icon } from '../';
import styles from './index.scss';

export default ({content}) => {

	const Item = (item, k) => (
		<div className={styles.item} key={k}>
			<Icon type={(k == 0) ? 'point-main' : 'point'}/>
			<div className={styles.desc}>
				{item.split('|').map((str, i) => <p key={i}>{str}</p>)}
			</div>
		</div>
	);

	return (
		<div className={styles.list}>
			{content.map((group, key) => <div key={key}>{group.map(Item)}</div>)}
		</div>
	)
		;
}