import { Icon, Spin } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Comment, Markdown } from '../../components';
import styles from './index.scss';

function mapStateToProps(state) {
	return {
		loading : state.loading.global,
		blogToc : state.blogToc,
		blogPage: state.blogPage
	};
}

export default connect(mapStateToProps)(({loading, blogToc, blogPage}) => {
	let data;
	if (!loading) data = blogPage;
	return (
		<div className={styles.page}>
			{loading
				? <Spin spinning={loading} size="large" style={{width: '100%', lineHeight: '720px'}}/>
				: <Markdown data={blogPage}/>
			}
			<Link to="/blog" className={styles.back}><Icon type="left"/> Go Back</Link>
			<Comment/>
		</div>
	);
});