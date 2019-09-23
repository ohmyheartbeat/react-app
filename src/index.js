import React from 'react';
import dva from 'dva';
// import ReactDOM from 'react-dom';
import './index.less';
import createHistory from 'history/createBrowserHistory';
import RouterConfig from './router';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// 1.初始化
const app = dva({
   history: createHistory()
});
// 2.插件
// 3.Model
app.model(require('./models/taosModel').default);
// 4.Router
app.router(require('./router').default);
// 5.启动
app.start('#root');
