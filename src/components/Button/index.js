import { Button, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './index.scss';

export default ({ children, url, to, ...other }) => {
  let Btn = (
    <Button
      className={styles.btn}
      type="primary"
      onClick={url ? () => window.open(url) : null}
      {...other}
    >
      {children}
      <Icon type="caret-right" />
    </Button>
  );

  if (to)
    Btn = (
      <Link className={styles.link} to={to}>
        {Btn}
      </Link>
    );

  return Btn;
};
