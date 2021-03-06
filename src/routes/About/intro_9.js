import { Button, DocTitle, LazyLoad } from '../../components';
import { homeToc } from '../../config';
import styles from './intro_9.scss';

export default () => {
  return (
    <div className={styles.intro}>
      <DocTitle content={homeToc[6]} />
      <LazyLoad className={styles.box}>
        <img alt="Project" className={styles.img} src="img/por-1.png" width="940" />
        <Button to="/project">Discover project story</Button>
      </LazyLoad>
    </div>
  );
};
