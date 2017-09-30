import { DocTitle, LazyLoad } from "../../components";
import { homeToc, vdSkillList } from "../../config";
import styles from "./intro_7.scss";

export default () => {
  const Item = (item, key) => (
    <div className={styles.card} key={key}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.desc}>
        {item.item.map((str, i) => <p key={i}>{str}</p>)}
      </div>
    </div>
  );
  return (
    <div className={styles.intro}>
      <DocTitle content={homeToc[4]} />
      <LazyLoad className={styles.box}>{vdSkillList.map(Item)}</LazyLoad>
      <LazyLoad className={styles.color}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </LazyLoad>
    </div>
  );
};
