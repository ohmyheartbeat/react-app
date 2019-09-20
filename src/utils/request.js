import fetch from 'dva/fetch';

// 解析json
function parseJSON(response) {
  return response.json();
}

// 检查返回状态
function checkStatus(response) {
  if (response.status >= 200 && response.status < 500) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  return fetch(url, { ...options })
    .then(checkStatus)
    .then(parseJSON)
    .then((data)=>({data}));
}