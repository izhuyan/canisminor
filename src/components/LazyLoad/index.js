import React from 'react';
import {Spin} from 'antd';
import LazyLoad from 'react-lazyload';
import styles from './index.scss';

export default ({
  children,
  className,
  offset = 0,
  width = '100%',
  height = 500,
  background = 'transparent',
  ...other
}) => {
  const placeholder = (
    <div
      className={styles.placeholder}
      style={{width, height: `${height}px`, background}}
      children={<Spin size="large" />}
    />
  );

  return (
    <LazyLoad height={height} offset={offset} placeholder={placeholder} once>
      <div className={[styles.lazyload, className].join(' ')} {...other}>
        {children}
      </div>
    </LazyLoad>
  );
};
