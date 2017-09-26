import { Spin } from 'antd';
import { connect } from 'dva';
import { ProList, Title } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

const State = state => ({
  loading: state.loading.global,
  blogToc: state.projectToc,
});

export default connect(State)(({ loading, blogToc }) => {
  setTitle('Projects');
  return (
    <div className={styles.project}>
      <Title title="Sense & pixels" desc="wanna see more ? updating soon..." />
      {loading ? (
        <Spin
          spinning={loading}
          size="large"
          style={{ width: '100%', lineHeight: '720px' }}
        />
      ) : (
        <ProList content={blogToc} />
      )}
    </div>
  );
});
