import { Icon, Spin } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import path from 'path';
import { Markdown, LazyLoad, Tags } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

// TODO: https://quilljs.com/blog/

function mapStateToProps(state) {
  return {
    loading: state.loading.global,
    blogToc: state.blogToc,
  };
}

export default connect(mapStateToProps)(({ loading, blogToc }) => {
  setTitle('Blog');
  const BlogPage = (record, key) => (
    <LazyLoad key={key} offset={-100} className={styles.post}>
      <Markdown data={record} />
      <div className={styles.footer}>
        {loading ? '' : <Tags data={record.tag} />}
        <Link
          to={path.join('blog', record.filename)}
          className={styles.readmore}
        >
          Read More<Icon type="right" />
        </Link>
      </div>
    </LazyLoad>
  );

  return (
    <div className={styles.blog}>
      <div className={styles.list}>
        {!loading ? blogToc.map(BlogPage) : <Spin size="large" />}
      </div>
    </div>
  );
});
