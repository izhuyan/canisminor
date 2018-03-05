import { Layout } from 'antd';
import { Link } from 'dva/router';
import { Icon } from '../../components';
import styles from './index.scss';

const { Footer } = Layout;

export default () => {
  const SocialIcon = ({ type, href }) => {
    return (
      <a href={href} target="_blank" rel="noopener">
        <Icon className={styles.icon} type={`social-${type}`} />
      </a>
    );
  };

  const SocialIconLink = ({ type, href }) => {
    return (
      <Link to={href}>
        <Icon className={styles.icon} type={`social-${type}`} />
      </Link>
    );
  };

  return (
    <Footer className={styles.footer}>
      <Icon className={styles.logo} type="logo-text" />
      <div className={styles.text}>
        © CanisMinor 2017<span className={styles.note}>京ICP备16055942号-1</span>
      </div>
      <div className={styles.social}>
        <SocialIconLink type="wechat" href="/wechat" />
        <SocialIcon
          type="linkedin"
          href="https://www.linkedin.com/in/%E6%98%B1%E5%B8%86-%E6%9D%A8-269087124/"
        />
        <SocialIcon type="github" href="https://github.com/canisminor1990" />
        <SocialIcon type="coding" href="https://coding.net/u/canisminor1990" />
        <SocialIcon type="mail" href="mailto:i@canisminor.cc" />
      </div>
    </Footer>
  );
};
