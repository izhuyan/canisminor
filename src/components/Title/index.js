import classnames from 'classnames/bind';
import {Typist} from '../';
import styles from './index.scss';

export default ({className, title, desc, ...other}) => {
  return (
    <div className={classnames.bind(styles)('contact', className)} {...other}>
      <div className={styles.title} children={title} />
      <Typist className={styles.desc} children={desc} />
    </div>
  );
};
