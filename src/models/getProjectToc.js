import request from '../utils/request';

export default {
  namespace: 'projectToc',
  state: {},
  reducers: {
    save(state, {payload: data}) {
      return {...state, data}.data;
    },
  },
  effects: {
    *GET(action, {call, put}) {
      const data = yield call(() => request('/api/project/toc'));
      yield put({
        type: 'save',
        payload: data.data,
      });
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen((location) => {
        const path = location.pathname.split('/');
        if (path[1] === 'project') dispatch({type: 'GET'});
      });
    },
  },
};
