import { Spin } from 'antd';
import { connect } from 'dva';
import path from 'path';
import { LazyLoad, Markdown, Tags, Button } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

// TODO: https://quilljs.com/blog/

const State = state => ({
  loading: state.loading.global,
  blogToc: state.blogToc,
});

export default connect(State)(({ loading, blogToc }) => {
  setTitle('Blog');
  const BlogPage = (record, key) => (
    <LazyLoad key={key} offset={-100} className={styles.post}>
      <Markdown data={record} />
      <div className={styles.footer}>
        {loading ? '' : <Tags data={record.tag} />}
        <Button to={path.join('blog', record.filename)}>Read More</Button>
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
