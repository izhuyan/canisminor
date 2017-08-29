import { Layout } from 'antd';
import { Icon } from '../../components';

const {Footer} = Layout;
import './index.scss';

export default () => {
	return (
		<Footer className="footer">
			<div className="footer-left">
				<Icon className="footer-logo" type="logo-text" />
				© CanisMinor 2017
				<span className="footer-note">京ICP备16055942号-1</span>
			</div>
			<div className="footer-right"></div>
		</Footer>
	);
}