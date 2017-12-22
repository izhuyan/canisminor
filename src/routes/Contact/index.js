import { Comment, Title } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

export default () => {
  setTitle('Contact');
  return (
    <div className={styles.contact}>
      <Title className={styles.title} title="Let's talk" desc="Feel free 2 contact me 😘" />
      <Comment className={styles.command} />
    </div>
  );
};
