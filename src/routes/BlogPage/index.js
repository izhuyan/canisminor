import { Icon, Spin } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Comment, LazyLoad, Markdown, Tags } from '../../components';
import setTitle from '../../utils/setTitle';
import styles from './index.scss';

const State = (state) => ({
	loading : state.loading.global,
	// blogToc: state.blogToc,
	blogPage: state.blogPage
});

export default connect(State)(({loading, blogPage}) => {
	if (!loading) setTitle(blogPage.title);
	return (
		<div className={styles.page}>
			{loading ? (
				<Spin
					spinning={loading}
					size="large"
					style={{width: '100%', lineHeight: '720px'}}
				/>
			) : (
				 <Markdown data={blogPage}/>
			 )}
			<LazyLoad className={styles.footer}>
				<Link to="/blog" className={styles.back}>
					<Icon type="left"/>Go Back
				</Link>
				{loading ? '' : <Tags data={blogPage.tag}/>}
			</LazyLoad>
			<LazyLoad>
				<Comment/>
			</LazyLoad>
		</div>
	);
});
