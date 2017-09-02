import {Icon, Menu} from '../../components';
import {Layout} from 'antd';
import {Link} from 'dva/router';
import classname from 'classnames';
import './index.scss';

const {Header} = Layout;

export default ({location}) => {

	const content = [
		{title: "Intro", to: "/home"},
		{title: "Project Story", to: "/project"},
		// {title: "Let's talk", to: "/contact"}
	]
	const NavItem = ({title, to}) => {
		let classConfig = classname({
			'header-navitem': true,
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
					<div className="header-phone">
						<Menu content={content}/>
					</div>
					<div className="header-desktop">
						{content.map((item, key) => <NavItem key={key} title={item.title} to={item.to}/>)}
					</div>
				</div>
			</Header>
	);
}