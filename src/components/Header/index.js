import { Layout } from 'antd';
import classnames from 'classnames/bind';
import { Link } from 'dva/router';
import { Menu, Logo } from '../../components';
import { navBar } from '../../config';
import styles from './index.scss';

const { Header } = Layout;

export default () => {
  const NavItem = ({ title, to }) => {
    const classConfig = classnames.bind(styles)('item', {
      item__active: window.location.pathname.indexOf(to) !== -1,
    });
    return <Link className={classConfig} to={to} children={title} />;
  };

  const showPhone = <Menu content={navBar} />;
  const showDesktop = navBar.map((item, key) => (
    <NavItem key={key} title={item.title} to={item.to} />
  ));
  return (
    <Header className={styles.header} style={{ zIndex: 999 }}>
      <Logo size={1.2} color={['#000', '#444']} />
      <div className={styles.nav}>
        <div className={styles.showPhone} children={showPhone} />
        <div className={styles.showDesktop} children={showDesktop} />
      </div>
    </Header>
  );
};
