import { Layout, Popover } from 'antd';
import { Icon } from '../../components';

const {Footer} = Layout;
import './index.scss';

export default () => {
	const SocialIcon = ({type, href}) => {
		return (
			<a href={href} target="_blank">
				<Icon className="footer-social-icon" type={`social-${type}`}/>
			</a>
		);
	};

	return (
		<Footer className="footer">
			<Icon className="footer-logo" type="logo-text"/>
			<div className="footer-text">
				© CanisMinor 2017<span className="footer-note">京ICP备16055942号-1</span>
			</div>
			<div className="footer-social">
				<Popover content={<img width="325" src="/img/wechat.png"/>}
				         trigger="click"
				         placement="top"
				>
					<a><Icon className="footer-social-icon" type="social-wechat"/></a>
				</Popover>
				<SocialIcon type="linkedin" href="https://www.linkedin.com/in/%E6%98%B1%E5%B8%86-%E6%9D%A8-269087124/"/>
				<SocialIcon type="github" href="https://github.com/canisminor1990"/>
				<SocialIcon type="coding" href="https://coding.net/u/canisminor1990"/>
				<SocialIcon type="mail" href="mailto:i@canisminor.cc"/>
			</div>
		</Footer>
	);
}