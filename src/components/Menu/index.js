import classnames from 'classnames/bind';
import { Link } from 'dva/router';
import React from 'react';
import styles from './index.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { content } = this.props;
    const menuList = content.map((item, key) => (
      <Link
        key={key}
        className={styles.item}
        to={item.to}
        children={item.title}
      />
    ));

    const classConfig = classnames.bind(styles)('menu', {
      menu__oppenned: this.state.open,
    });

    return (
      <div className={classConfig} onClick={this.onClick}>
        <div className={styles.list}>
          <div className={styles.bg} />
          {menuList}
        </div>
        <div className={styles.icon}>
          <div className={styles.cls} />
          <div className={styles.cls} />
          <div className={styles.cls} />
        </div>
      </div>
    );
  }
}
