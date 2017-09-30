import { Icon } from "../";
import styles from "./index.scss";

export default ({ type, text }) => (
  <div className={styles.box}>
    <div className={styles.icon}>
      <Icon type={`doc-${type}`} />
    </div>
    <div className={styles.text}>{text.toUpperCase()}</div>
  </div>
);
