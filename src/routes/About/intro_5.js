import { DocTitle, ExpList } from "../../components";
import { expList, homeToc } from "../../config";
import styles from "./intro_5.scss";

export default () => {
  return (
    <div className={styles.intro}>
      <DocTitle content={homeToc[2]} />
      <div>
        <ExpList content={expList} />
      </div>
    </div>
  );
};
