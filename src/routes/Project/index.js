import { Spin } from 'antd';
import { connect } from 'dva';
import { ProList, Title } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

function mapStateToProps(state) {
  return {
    loading: state.loading.global,
    blogToc: state.projectToc,
  };
}

export default connect(mapStateToProps)(({ loading, blogToc }) => {
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
