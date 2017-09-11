import {connect} from 'dva';
import styles from './index.scss'

function mapStateToProps(state) {
	return {
		loading: state.loading.global,
		blogToc: state.blogToc,
		blogPage: state.blogPage
	};
}

export default connect(mapStateToProps)(({loading,blogToc,blogPage}) => {

	return (
			<div className={styles.page}>
				{blogPage}
			</div>
	);
});