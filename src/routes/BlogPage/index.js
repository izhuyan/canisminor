import {connect} from 'dva';
import {Markdown} from '../../components'
import styles from './index.scss'

function mapStateToProps(state) {
	return {
		loading: state.loading.global,
		blogToc: state.blogToc,
		blogPage: state.blogPage
	};
}

export default connect(mapStateToProps)(({loading,blogToc,blogPage}) => {
console.log(blogPage)
	return (
			<div className={styles.page}>
				<Markdown data={blogPage}/>
			</div>
	);
});