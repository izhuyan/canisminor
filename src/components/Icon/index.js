import classnames from 'classnames';

export default ({ type, className, ...other }) => {
  const classConfig = classnames('cm-iconfont', {
    [`icon-${type}`]: type,
    [className]: className,
  });
  return <span className={classConfig} {...other} />;
};
