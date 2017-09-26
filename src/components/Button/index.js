import { Button, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './index.scss';

export default ({ children, url, to, icon = 'right', ...other }) => {
  let Btn = (
    <Button
      className={styles.btn}
      type="primary"
      onClick={url ? () => window.open(url) : null}
      {...other}
    >
      {children}
      {icon ? <Icon type={icon} /> : null}
    </Button>
  );

  if (to) {
    Btn = <Link to={to}>{Btn}</Link>;
  }

  return Btn;
};
