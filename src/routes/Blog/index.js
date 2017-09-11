import {connect} from 'dva';
import {Link} from 'dva/router';
import {Table} from 'antd'
import {Markdown} from '../../components'
import timeFormat from '../../utils/timeFormat'
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
			title: 'post',
			dataIndex: 'title',
			className: styles.post,
			render: (text, record, index) => (
					<div>
						<Link className={styles.title}
						      to={record.filename}
						      children={text}/>
						<div className={styles.time}>
							<span>{timeFormat(record.filename)}</span> - CanisMinor
						</div>
						<Markdown body={record.desc}/>
						<Link className={styles.readmore}
						      to={record.filename}
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
						dataSource={blogToc}
						rowKey={(record) => record.filename}
				/>
			</div>
	);
});