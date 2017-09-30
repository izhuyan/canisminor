import styles from "./index.scss";

export default () => {
  return (
    <div className={styles.view}>
      <h1>404</h1>
      <div>
        Ops, page not found{" "}
        <span role="img" aria-label="rolling_on_the_floor_laughing">
          🤣
        </span>
      </div>
    </div>
  );
};
