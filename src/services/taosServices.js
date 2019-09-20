import request from '../utils/request';
import config from '../config';

export async function fetchDatabaseInfo(params) {
  return request(`${config.domain}`, {
    method: 'GET'
  })

}