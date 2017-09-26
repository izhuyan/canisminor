import {LazyLoad} from '../';
import styles from './index.scss';

export default ({content}) => {
  const Item = (item, key) => (
    <LazyLoad className={styles.item} key={key}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(/img/${item.img}.png)`,
          boxShadow: `0 12px 24px 0 ${hexToRgb(item.color)}`,
        }}
      />
      <div className={styles.content}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.time}>{item.time}</div>
        <div className={styles.desc}>
          {item.desc.split('|').map((str, i) => <p key={i}>{str}</p>)}
        </div>
      </div>
    </LazyLoad>
  );
  return <div className={styles.list}>{content.map(Item)}</div>;
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgba = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
    0.25,
  ];
  return `rgba(${rgba.join(',')})`;
}
