import React from 'react';
import { AwardList, DocTitle, Icon, Showcase } from '../../components';
import { awardList, homeToc } from '../../config';
import styles from './intro_4.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const showcaseData = [
      { title: 'MAJOR:', desc: 'Visual Design' },
      { title: 'DUR:', desc: '2009 » 13' },
      { title: 'GPA:', desc: '3.58/4' },
    ];
    return (
      <div className={styles.intro}>
        <DocTitle content={homeToc[1]} />
        <div className={styles.school}>
          <Icon className={styles.logo} type="caa-logo" />
          <div className={styles.content}>
            <Icon className={styles.title} type="caa-text" />
            <div className={styles.desc}>
              China Academy of Art<br />
              Top Art School World Ranking: 7th
            </div>
          </div>
        </div>
        <Showcase content={showcaseData} />
        {this.state.show ? (
          <div className={styles.awards}>
            <AwardList content={awardList} />
          </div>
        ) : (
          <div className={styles.button} onClick={this.onClick}>
            Show Awards
          </div>
        )}
      </div>
    );
  }
}
