import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// todo  状态管理模式   采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
export default new Vuex.Store({
  // todo 单一状态树  用一个对象就包含了全部的的应用层级状态  唯一数据源的存在 每一个应用仅包含一个store实例
  state: {

  },
  // todo  更改 Vuex 的 store 中的状态的唯一方法    有个标准的提交风格  commit
  mutations: {},
  /** 类似于mutation  不同的是action提交的不是直接修改状态 state  可以包含任意异步操作
   这个context对象 拥有和store实例一样的方法和属性  但是这个context不是store实例本身   想异步  后台程序的意思   通过分发来触发  dispatch
   异步操作 用dispatch后  返回Promise 可以用 then()  还可以用 async /  await 来组合 */
  actions: {},
  modules: {},
});
