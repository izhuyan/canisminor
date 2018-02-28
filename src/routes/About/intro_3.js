import { DocTitle, Icon, Showcase, LazyLoad } from '../../components';
import { homeToc, showcase, introduction } from '../../config';
import styles from './intro_3.scss';

export default () => {
  return (
    <div className={styles.intro}>
      <DocTitle content={homeToc[0]} />
      <LazyLoad className={styles.avatar}>
        <div className={styles.img} />
        <div className={styles.text}>
          <Icon className={styles.title} type="name" />
          <div className={styles.desc}>{introduction[0]}</div>
        </div>
      </LazyLoad>
      <LazyLoad className={styles.info}>
        <div className={styles.logo} />
        <Showcase content={showcase[0]} />
      </LazyLoad>
    </div>
  );
};
