import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import ElementUI from 'element-ui';

// 导入网络请求层
import { postRequest } from './utils/api';
import { postKeyValueRequest } from './utils/api';
import { putRequest } from './utils/api';
import { deleteRequest } from './utils/api';
import { getRequest } from './utils/api';
import { initMenu } from './utils/menu';

//网络请求放全局
Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'small' });

// 全局前置守卫  守卫导航  按创建顺序调用
router.beforeEach((to, from, next) => {
  if (to.path == '/') {  // 如果是  根目录==登录页面  直接通过
    next();
  } else {
    if (window.sessionStorage.getItem('user')) {  // 已登录后保存menu信息在本地  初始化菜单信息
      initMenu(router, store);
      next();
    } else {
      next('/?redirect=' + to.path);
    }
  }
});

new Vue({
  router,  // 创建和挂载根实例   通过 router 配置参数注入路由，  从而让整个应用都有路由功能
  store,
  render: h => h(App),
}).$mount('#app');
