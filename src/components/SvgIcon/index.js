import classnames from 'classnames/bind';
import styles from './index.scss';

export default ({ type, className, ...other }) => {
  const useTag = `<use xlink:href="#icon-${type}" />`;
  return (
    <svg
      className={classnames.bind(styles)('svg', className)}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: useTag }}
      {...other}
    />
  );
};
