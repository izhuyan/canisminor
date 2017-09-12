import {connect} from 'dva';
import {Link} from 'dva/router';
import {Table} from 'antd'
import {Markdown} from '../../components'
import path from 'path';
import styles from './index.scss'

// TODO: https://quilljs.com/blog/

function mapStateToProps(state) {
	return {
		loading: state.loading.models.blogToc,
		blogToc: state.blogToc
	};
}

export default connect(mapStateToProps)(({loading, blogToc}) => {
	let data;
	if (!loading) data = blogToc
	const columns = [
		{
			title: 'post',
			dataIndex: 'title',
			className: styles.post,
			render: (text, record, index) => (
					<div>
						<Markdown data={record}/>
						<Link className={styles.readmore}
						      to={path.join('blog',record.filename)}
						      children="Read more"/>
					</div>
			)
		}
	]

	return (
			<div className={styles.blog}>
				<Table
						className={styles.table}
						rowClassName={() => styles.row}
						showHeader={false}
						columns={columns}
						dataSource={data}
						rowKey={(record) => record.filename}
						loading={loading}
				/>
			</div>
	);
});