import {connect} from 'dva';
import {Markdown,Comment} from '../../components'
import styles from './index.scss'

function mapStateToProps(state) {
	return {
		loading: state.loading.global,
		blogToc: state.blogToc,
		blogPage: state.blogPage
	};
}

export default connect(mapStateToProps)(({loading,blogToc,blogPage}) => {
	let data;
	if (!loading) data = blogPage
	return (
			<div className={styles.page}>
				<Markdown data={data}/>
				<Comment />
			</div>
	);
});