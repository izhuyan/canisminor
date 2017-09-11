import { Layout } from 'antd';
import classnames from 'classnames/bind';
import { Link } from 'dva/router';
import { Icon, Menu } from '../../components';
import { navBar } from '../../config';
import styles from './index.scss';

const {Header} = Layout;

export default ({location}) => {

	const NavItem = ({title, to}) => {
		const classConfig = classnames.bind(styles)(
			'item',
			{'item__active': location.pathname == to}
		);
		return <Link className={classConfig} to={to} children={title}/>;
	};

	const showPhone   = <Menu content={navBar}/>;
	const showDesktop = navBar.map((item, key) => (
		<NavItem key={key} title={item.title} to={item.to}/>
	));
	return (
		<Header className={styles.header}>
			<Icon className={styles.logo} type="logo"/>
			<div className={styles.nav}>
				<div className={styles.showPhone} children={showPhone}/>
				<div className={styles.showDesktop} children={showDesktop}/>
			</div>
		</Header>
	);
}