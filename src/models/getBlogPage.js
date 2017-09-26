import request from '../utils/request';

export default {
  namespace: 'blogPage',
  state: {},
  reducers: {
    save(state, {payload: data}) {
      return {...state, data}.data;
    },
  },
  effects: {
    *GET(action, {call, put}) {
      const path = window.location.pathname.split('/')[2];
      const data = yield call(() => request(`/api/blog/${path}`));
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
        if (path[1] === 'blog' && path[2]) dispatch({type: 'GET'});
      });
    },
  },
};
