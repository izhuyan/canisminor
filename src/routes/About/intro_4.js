import { Component } from 'react';
import {
  AwardList,
  Button,
  DocTitle,
  Icon,
  LazyLoad,
  Showcase,
} from '../../components';
import { awardList, homeToc } from '../../config';
import styles from './intro_4.scss';

const showcaseData = [
  { title: 'MAJOR:', desc: 'Visual Design' },
  { title: 'DUR:', desc: '2009 » 13' },
  { title: 'GPA:', desc: '3.58/4' },
];

export default class extends Component {
  state = { show: false };

  onClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className={styles.intro}>
        <DocTitle content={homeToc[1]} />
        <LazyLoad className={styles.school}>
          <Icon className={styles.logo} type="caa-logo" />
          <div className={styles.content}>
            <Icon className={styles.title} type="caa-text" />
            <div className={styles.desc}>
              China Academy of Art<br />
              Top Art School World Ranking: 7th
            </div>
          </div>
        </LazyLoad>
        <LazyLoad className={styles.row}>
          <Showcase content={showcaseData} />
          {this.state.show ? (
            <div className={styles.awards}>
              <AwardList content={awardList} />
            </div>
          ) : (
            <Button
              style={{ marginTop: '2rem' }}
              onClick={this.onClick}
              icon={false}
              ghost
            >
              Show Awards
            </Button>
          )}
        </LazyLoad>
      </div>
    );
  }
}
