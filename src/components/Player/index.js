import Plyr from 'plyr';
import React from 'react';
import styles from './index.scss';

export default class extends React.Component {
  componentDidMount() {
    Plyr.setup();
  }

  render() {
    const { src } = this.props;
    return (
      <video className={styles.video} controls>
        <source src={`http://qn-video.canisminor.cc/${src}`} type="video/mp4" />
      </video>
    );
  }
}
