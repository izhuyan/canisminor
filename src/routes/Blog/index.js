import { Icon, Spin, Table } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import path from 'path';
import { Markdown } from '../../components';
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
  const columns = [
    {
      title: 'post',
      dataIndex: 'title',
      className: styles.post,
      render: (text, record) => (
        <div>
          <Markdown data={record} />
          <div className={styles.footer}>
            <div className={styles.tag}>
              Tags:
              {loading
                ? ''
                : record.tag.map((item, key) => <span key={key}>{item}</span>)}
            </div>
            <Link
              to={path.join('blog', record.filename)}
              className={styles.readmore}
            >
              Read More<Icon type="right" />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.blog}>
      {loading ? (
        <Spin
          spinning={loading}
          size="large"
          style={{ width: '100%', lineHeight: '720px' }}
        />
      ) : (
        <Table
          className={styles.table}
          rowClassName={() => styles.row}
          showHeader={false}
          columns={columns}
          dataSource={blogToc}
          rowKey={record => record.filename}
        />
      )}
    </div>
  );
});
