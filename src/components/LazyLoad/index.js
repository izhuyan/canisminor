import { Spin } from 'antd';
import LazyLoad from 'react-lazyload';
import styles from './index.scss';

export default ({
	                children,
	                offset = 100,
	                width = '100%',
	                height = 500,
	                background = 'transparent',
	                ...other
                }) => {

	const placeholder = <div
		className={styles.placeholder}
		style={{width: width, height: height + 'px', background: background}}
		children={<Spin size="large"/>}
	/>;

	return <LazyLoad height={height}
	                 offset={offset}
	                 placeholder={placeholder}
	                 children={children}
	                 once
	                 {...other}
	/>;
}