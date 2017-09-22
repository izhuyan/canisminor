import { Title } from '../../components';
import { Height } from '../../utils/window';
import styles from './intro_1.scss';

export default () => {
  return (
    <Title
      className={styles.intro}
      style={Height(150)}
      title="CanisMinor"
      desc="UI / UX Designer & FE Developer"
    />
  );
};
