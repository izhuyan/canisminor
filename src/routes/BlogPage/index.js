import { Icon, Spin } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button, Comment, LazyLoad, Markdown, Tags } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

const State = state => ({
  loading: state.loading.global,
  // blogToc: state.blogToc,
  blogPage: state.blogPage,
});

export default connect(State)(({ loading, blogPage }) => {
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
      <LazyLoad className={styles.footer}>
        <Button style={{ paddingRight: '2rem' }} to="/blog" icon={false}>
          <Icon type="left" /> Go Back
        </Button>
        {loading ? '' : <Tags data={blogPage.tag} />}
      </LazyLoad>
      <LazyLoad>
        <Comment />
      </LazyLoad>
    </div>
  );
});
