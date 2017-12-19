import { Link } from 'dva/router';
import { Typist, Logo, Icon } from '../../components';
import { indexPage } from '../../config';
import styles from './index.scss';

export default () => {
  const toIndex = () => {
    window.location.href = '/about';
  };

  return (
    <Link className={styles.splash} to={indexPage}>
      <div className={styles.logo}>
        <Logo size="1.5" />
        <Icon type="logo-text-combine" />
      </div>
      <Typist className={styles.text} onTypingDone={() => setTimeout(toIndex, 2000)}>
        <span className={styles.shape} />
        The collection of curriculum vitae and<br /> recent projects
      </Typist>
    </Link>
  );
};
