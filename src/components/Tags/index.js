import styles from './index.scss';

export default ({data, ...other}) => {
  return (
    <div className={styles.tag} {...other}>
      {data.map((item, key) => <span key={key}>{item}</span>)}
    </div>
  );
};
