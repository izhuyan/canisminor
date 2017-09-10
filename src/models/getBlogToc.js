import request from '../utils/request';

export default {
	namespace: 'blogToc',
	state: {},
	reducers: {
		save(state, {payload: data}) {
			return {...state, data}.data;
		},
	},
	effects: {
		* GET({}, {call, put}) {
			const data = yield call(() => request(`/api/blog/toc`));
			yield put({
				type: 'save',
				payload: data.data,
			});
		}
	},
	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(location => {
				const path = location.pathname.split('/')
				if (path[1] === 'blog') dispatch({type: 'GET'})
			});
		},
	},
};