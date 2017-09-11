import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import styles from './index.scss';

export default ({src}) => (
	<Player classNames={styles.player}>
		<source src={`http://ovp0fxang.bkt.clouddn.com/${src}`}/>
	</Player>
)