import setTitle from "../../utils/setTitle";
import styles from "./index.scss";
import Intro1 from "./intro_1";
import Intro2 from "./intro_2";
import Intro3 from "./intro_3";
import Intro4 from "./intro_4";
import Intro5 from "./intro_5";
import Intro6 from "./intro_6";
import Intro7 from "./intro_7";
import Intro8 from "./intro_8";
import Intro9 from "./intro_9";

export default () => {
  setTitle("About");
  return (
    <div className={styles.intro}>
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Intro4 />
      <Intro5 />
      <Intro6 />
      <Intro7 />
      <Intro8 />
      <Intro9 />
    </div>
  );
};
