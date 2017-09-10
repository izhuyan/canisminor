import {connect} from 'dva';
import './index.scss'

function mapStateToProps(state) {
	return {
		loading: state.loading.global,
		blogToc: state.blogToc,
		blogPage: state.blogPage
	};
}

export default connect(mapStateToProps)(({loading,blogToc,blogPage}) => {

	return (
			<div>
				{blogPage}
			</div>
	);
});