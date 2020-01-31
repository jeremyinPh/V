import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from '../views/Home.vue';
import About from '../views/About';

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象
/** *  如何调用?
 *    this.$router.replace((path == '/' || path == undefined) ? '/' : path);
 *    this.$router.push("/about");
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/test',
    name: 'test',
    component: About,
    hidden: true,
    meta: { // 配置meta   用于全局前置守卫  检查  然后根据不同值 跳到不同地方
      roles: ['admin', 'user'],
    },
    children: [ // 子页面 嵌套路由   /test/chat
      {
        path: '/chat',
        name: '在线聊天',
        component: Home,
        hidden: true,
      },
    ],
  },
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes,
});

// 暴露出去
export default router;
