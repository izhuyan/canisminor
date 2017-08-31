import { Icon } from '../../components';
import { Layout } from 'antd';
import { Link } from 'dva/router';
import classname from 'classnames';
import './index.scss';

const {Header} = Layout;
export default ({location}) => {

	const NavItem = ({title, to}) => {
		let classConfig = classname({
			                            'header-navitem'        : true,
			                            'header-navitem__active': location.pathname == to
		                            });
		return (
			<Link className={classConfig} to={to}>
				{title}
			</Link>
		);
	};
	return (
		<Header className="header">
			<Icon className="header-logo" type="logo"/>
			<div className="header-nav">
				<NavItem title="Intro" to="/home"/>
				<NavItem title="Project Story" to="/project"/>
				<NavItem title="Let's talk" to="/contact"/>
			</div>
		</Header>
	);
}