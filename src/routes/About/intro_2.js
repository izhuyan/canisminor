import { IntroIcon } from '../../components';
import { Height } from '../../utils/window';
import {homeToc} from '../../config'
import styles from './intro_2.scss';

export default () => {
	return (
		<div className={styles.intro} style={Height()}>
			<div className={styles.title}>Introduciton</div>
			<div className={styles.subtitle}>
				{'UI/UX Designer. FE Developer.'.toUpperCase()}
			</div>
			<div className={styles.desc}>
				Hi,这里是杨昱帆，感谢您花时间浏览我的Resume.以下将会分7个版块阐述我的技术栈和知识构成
			</div>
			<div className={styles.doc}>
				{homeToc.map((doc, key) => <IntroIcon key={key} type={doc.type} text={doc.text}/>)}
			</div>
		</div>
	);
};