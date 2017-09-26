import classnames from 'classnames';
import Gitment from 'gitment';
import { Component } from 'react';
import { gitment as config } from '../../config';
import styles from './index.scss';

export default class extends Component {
  componentDidMount() {
    const Config = { id: window.location.pathname, ...config };
    const gitment = new Gitment(Config);
    gitment.renderComments('comments');
    gitment.renderEditor('editor');
  }

  render() {
    const { className, ...other } = this.props;
    return (
      <div
        className={classnames.bind(styles)(className, styles.command)}
        {...other}
      >
        <div id="comments" className={styles.item} />
        <div id="editor" className={styles.item} />
      </div>
    );
  }
}
