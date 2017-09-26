import {DocTitle, SvgIcon, LazyLoad} from '../../components';
import {feSkillList, homeToc} from '../../config';
import styles from './intro_8.scss';

export default () => {
  const Item = (item, key) => (
    <div className={styles.item} key={key}>
      <SvgIcon className={styles.icon} type={`fe-${item.icon}`} />
      {item.title}
    </div>
  );
  return (
    <div className={styles.intro}>
      <DocTitle content={homeToc[5]} />
      <LazyLoad className={styles.box}>
        {feSkillList.map(Item)}
        <div className={styles.item}>
          <span className={styles.emoji} role="img" aria-label="nail_care">💅</span>
          Styled Components
        </div>
      </LazyLoad>
    </div>
  );
};
