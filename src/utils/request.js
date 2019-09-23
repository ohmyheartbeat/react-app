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

export default function requests(url, options) {
  const headers= {
    'Accept': 'application/x-www-form-urlencoded',
    'mode': 'no-cors'
  };
  return fetch(url, { ...options, ...headers })
    .then(checkStatus)
    .then(parseJSON)
    .then(data=>{
      console.log(data);
      return data;
    });
}