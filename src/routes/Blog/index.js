import {connect} from 'dva';
import {Link} from 'dva/router';
import {Table} from 'antd'
import './index.scss'

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
			className: 'blog-title'
		},
		{
			title: 'cover',
			dataIndex: 'cover',
			className: 'blog-cover'
		},
		{
			title: 'tag',
			dataIndex: 'tag',
			className: 'tag'
		},
		{
			title: 'filename',
			dataIndex: 'filename',
			className: 'filename',
			render: (text, record, index) => <Link to={text}>sds</Link>
		}
	]

	return (
			<div className="blog">
				<Table
						showHeader={false}
						columns={columns}
						dataSource={blogToc}
						rowKey={(record) => record.filename}
						loading={loading}
				/>
			</div>
	);
});