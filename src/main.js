import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router/router';
import store from './store/store';
import '../public/js/bideo'; // 首页视频播放js
import '../public/js/main'; // 首页视频播放js

// 导入网络请求层
import {
  postRequest,
  postKeyValueRequest,
  putRequest,
  deleteRequest,
  getRequest,
} from './utils/api';
import { initMenu } from './utils/menu';

// 网络请求放全局
Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'small' });

// 全局前置守卫  守卫导航  按创建顺序调用
// router.beforeEach((to, from, next) => {
//   // 如果是  根目录==登录页面  直接通过
//   if (to.path === '/') {
//     next();
//   } else {
//     // 已登录后保存menu信息在本地  初始化菜单信息
//     if (window.sessionStorage.getItem('user')) {
//       initMenu(router, store);
//       next();
//     } else {
//       next(`/?redirect=${to.path}`);
//     }
//   }
// });
// 创建和挂载根实例   通过 router 配置参数注入路由，  从而让整个应用都有路由功能
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
