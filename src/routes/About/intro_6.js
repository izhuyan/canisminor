import { Button, DocTitle } from '../../components';
import { homeToc, specList } from '../../config';
import styles from './intro_6.scss';

export default () => {

	const Img = (item, key) => <img
		key={key}
		width={item.width}
		height={item.height || ''}
		src={item.src}
	/>;

	const Btn = (item, key) => <Button
		key={key}
		url={item.url}
		children={item.title}
		ghost={(key > 0) ? true : false}
	/>;

	const Item = (item, key) => (
		<div key={key} className={styles.item}>
			{
				(item.img.length === 1)
					? item.img.map(Img)
					: <div className={styles.box}>{item.img.map(Img)}</div>
			}
			<div className={styles.desc}>{item.desc}</div>
			{
				(item.btn.length === 1)
					? item.btn.map(Btn)
					: <div className={styles.btn}>{item.btn.map(Btn)}</div>
			}
		</div>
	);

	return (
		<div className={styles.intro}>
			<DocTitle content={homeToc[3]}/>
			{specList.map(Item)}
		</div>
	);
};