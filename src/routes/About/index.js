import { LazyLoad } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';
import intro_1 from './intro_1';
import intro_2 from './intro_2';
import intro_3 from './intro_3';
import intro_4 from './intro_4';
import intro_5 from './intro_5';
import intro_6 from './intro_6';
import intro_7 from './intro_7';
import intro_8 from './intro_8';
import intro_9 from './intro_9';

export default () => {
	setTitle('About');
	return (
		<div className={styles.intro}>
			{intro_1()}
			{intro_2()}
			<LazyLoad children={intro_3()}/>
			<LazyLoad children={intro_4()}/>
			<LazyLoad children={intro_5()}/>
			<LazyLoad children={intro_6()}/>
			<LazyLoad children={intro_7()}/>
			<LazyLoad children={intro_8()}/>
			<LazyLoad children={intro_9()}/>
		</div>
	);
}