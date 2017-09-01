import { Icon, Button } from 'antd';
import { Link } from 'dva/router';
import clasnames from 'classnames';
import './index.scss';

export default ({children, url, to, ...other}) => {

	return (
		<Link to={to}>
			<Button
				className='cm-btn'
				type="primary"
				onClick={url ? () => window.open(url) : null}
				{...other}>
				{children}<Icon type="caret-right"/>
			</Button>
		</Link>
	);
}