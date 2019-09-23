import requests from '../utils/request';
import config from '../config';

export async function fetchDatabaseInfo(params) {
  return requests(`${config.domain}`, {
    method: 'GET'
  })

}