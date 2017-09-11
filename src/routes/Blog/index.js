import {connect} from 'dva';
import {Link} from 'dva/router';
import {Table} from 'antd'
import styles from './index.scss'

// TODO: https://quilljs.com/blog/

function mapStateToProps(state) {
	return {
		loading: state.loading.models.blogToc,
		blogToc: state.blogToc
	};
}

export default connect(mapStateToProps)(({loading, blogToc}) => {

	const columns = [
		{
			title: 'title',
			dataIndex: 'title',
			className: styles.title
		},
		{
			title: 'desc',
			dataIndex: 'desc',
			className: styles.desc
		},
		{
			title: 'filename',
			dataIndex: 'filename',
			className: 'filename',
			render: (text, record, index) => <Link to={text}>Read more</Link>
		}
	]

	return (
			<div className={styles.blog}>
				<Table
					className={styles.table}
					rowClassName={()=>styles.row}
						showHeader={false}
						columns={columns}
						dataSource={blogToc}
						rowKey={(record) => record.filename}
						loading={loading}
				/>
			</div>
	);
});