import styles from './index.scss';

export default () => {
  return (
    <div className={styles.view}>
      <h1>404</h1>
      <div>
        Ops, page not found{' '}
        <span role="img" aria-label="ROFL">
          🤣
        </span>
      </div>
    </div>
  );
};
