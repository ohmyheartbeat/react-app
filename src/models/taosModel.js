import { fetchDatabaseInfo } from '../services/taosServices';

export default {
  namespace: 'tasoModel',
  state: {
    databaseInfo: [], //数据库信息
  },
  effects: [
    {
      *fetchDatabaseInfo({payload}, {call, put}){
        const res = yield call(fetchDatabaseInfo, payload);
        if (res){
          yield put({
            type: 'updateState',
            payload: {
              databaseInfo: res,
            }
          })
        }
      }
    }
  ],
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    },
  },
}