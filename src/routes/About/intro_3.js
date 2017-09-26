import {DocTitle, Icon, Showcase, LazyLoad} from '../../components';
import {homeToc} from '../../config';
import styles from './intro_3.scss';

export default () => {
  const showcaseData = [
    {title: 'born:', desc: '1990.9.30'},
    {title: 'mobile:', desc: '153-0585-3008'},
    {title: 'e-mail:', desc: 'i@canisminor.cc'},
  ];
  return (
    <div className={styles.intro}>
      <DocTitle content={homeToc[0]} />
      <LazyLoad className={styles.avatar}>
        <div className={styles.img} />
        <div className={styles.text}>
          <Icon className={styles.title} type="name" />
          <div className={styles.desc}>
            {
              '现居北京，UED全链路设计师，毕业于CAA中国美术学院09级视觉传达。>5年从业经验，专注于 Design » Code 设计流程管理和UI原子设计模式(Atomic Design)及自动化设计，具备流行前端技术栈React/Vue，阿里开源项目重度用户Antd/Dva/Roadhog，Sketch第三方插件作者。'
            }
          </div>
        </div>
      </LazyLoad>
      <LazyLoad className={styles.info}>
        <div className={styles.logo} />
        <Showcase content={showcaseData} />
      </LazyLoad>
    </div>
  );
};
