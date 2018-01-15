import { Comment, Title, Icon } from '../../components';
import setTitle from '../../utils/setTitle';
import { contactData } from '../../config';
import styles from './index.scss';

export default () => {
  setTitle('Contact');

  const Info = ({ type, info, url }) => (
    <div className={styles.info} onClick={url ? () => window.open(url) : null}>
      <Icon type={`contact-${type}`} />
      <div>{info}</div>
    </div>
  );

  return (
    <div className={styles.contact}>
      <Title className={styles.title} title="Let's talk" desc="Feel free 2 contact me 😘" />
      <div className={styles.box}>
        {contactData.map(i => <Info key={i[0]} type={i[0]} info={i[1]} url={i[2]} />)}
      </div>
      <Comment className={styles.command} />
    </div>
  );
};
