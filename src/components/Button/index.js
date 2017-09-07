import { Icon, Button } from 'antd';
import { Link } from 'dva/router';
import clasnames from 'classnames';
import './index.scss';

export default ({children, url, to, ...other}) => {

	let Btn = (
		<Button
			className='cm-btn'
			type="primary"
			onClick={url ? () => window.open(url) : null}
			{...other}>
			{children}<Icon type="caret-right"/>
		</Button>
	)

	if (to) Btn = (<Link className="cm-btn-link" to={to}>{Btn}</Link>)

	return Btn
}