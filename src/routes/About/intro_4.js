import { Component } from 'react';
import { AwardList, Button, DocTitle, Icon, LazyLoad, Showcase } from '../../components';
import { awardList, homeToc, showcase, introduction } from '../../config';
import styles from './intro_4.scss';

export default class extends Component {
  state = { show: false };

  onClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const Intro = introduction[1].split('\n');
    return (
      <div className={styles.intro}>
        <DocTitle content={homeToc[1]} />
        <LazyLoad className={styles.school}>
          <Icon className={styles.logo} type="caa-logo" />
          <div className={styles.content}>
            <Icon className={styles.title} type="caa-text" />
            <div className={styles.desc}>
              {Intro[0]}
              <br />
              {Intro[1]}
            </div>
          </div>
        </LazyLoad>
        <LazyLoad className={styles.row}>
          <Showcase content={showcase[1]} />
          {this.state.show ? (
            <div className={styles.awards}>
              <AwardList content={awardList} />
            </div>
          ) : (
            <Button style={{ marginTop: '2rem' }} onClick={this.onClick} icon={false} ghost>
              Show Awards
            </Button>
          )}
        </LazyLoad>
      </div>
    );
  }
}
