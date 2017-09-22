import { Icon, Spin } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Comment, Markdown } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

function mapStateToProps(state) {
  return {
    loading: state.loading.global,
    // blogToc: state.blogToc,
    blogPage: state.blogPage,
  };
}

export default connect(mapStateToProps)(({ loading, blogPage }) => {
  if (!loading) setTitle(blogPage.title);
  return (
    <div className={styles.page}>
      {loading ? (
        <Spin
          spinning={loading}
          size="large"
          style={{ width: '100%', lineHeight: '720px' }}
        />
      ) : (
        <Markdown data={blogPage} />
      )}
      <div className={styles.footer}>
        <Link to="/blog" className={styles.back}>
          <Icon type="left" />Go Back
        </Link>
        <div className={styles.tag}>
          Tags:
          {loading
            ? ''
            : blogPage.tag.map((item, key) => <span key={key}>{item}</span>)}
        </div>
      </div>
      <Comment />
    </div>
  );
});
