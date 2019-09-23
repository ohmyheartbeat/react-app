import { fetchDatabaseInfo } from '../services/taosServices';

export default {
  namespace: 'taosModel',
  state: {
    databaseInfo: [
      {
        'db_name': '测试数据库',
      }
    ], //数据库信息
  },
  effects: {
      *fetchDatabaseInfo({payload}, {call, put}){
        const res = yield call(fetchDatabaseInfo, payload);
        console.log(res);
        if (res){
          yield put({
            type: 'updateState',
            payload: {
              databaseInfo: res,
            }
          })
        }
      }
      },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    },
  },
}