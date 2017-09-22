import styles from './index.scss';

export default ({ content }) => (
  <div className={styles.showcase}>
    {content.map((item, key) => (
      <div key={key} className={styles.item}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.desc}>{item.desc}</div>
      </div>
    ))}
  </div>
);
