import { getRequest } from './api';

export const initMenu = (router, store) => {
  // store有数据存在 不是正常的跳转 是按F5的刷新或者直接地址栏输入进入的  这时候直接返回  不必执行菜单初始化
  if (store.state.routes.length > 0) {
    return;
  }
  // store不存在数据  需要初始化  将返回的JSON转为router需要的格式
  getRequest('/system/config/menu').then((data) => {
    /* if (data) {
      let fmtRoutes = formatRoutes(data);
      router.addRoutes(fmtRoutes);
      store.commit('initRoutes', fmtRoutes);
      store.dispatch('connect');
    } */
  });
};
/*
export const formatRoutes = (routes) => {
  let fmRoutes = [];

  routes.forEach(router => {
    let {
      path,
      component,
      name,
      meta,
      iconCls,
      children
    } = router;

    if (children && children instanceof Array) {
      children = formatRoutes(children);
    }

    let fmRouter = {
      path: path,
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children,
      component(resolve) {
        if (component.startsWith("Home")) {
          require(['../views/' + component + '.vue'], resolve);
        } else if (component.startsWith("Emp")) {
          require(['../views/emp/' + component + '.vue'], resolve);
        } else if (component.startsWith("Per")) {
          require(['../views/per/' + component + '.vue'], resolve);
        } else if (component.startsWith("Sal")) {
          require(['../views/sal/' + component + '.vue'], resolve);
        } else if (component.startsWith("Sta")) {
          require(['../views/sta/' + component + '.vue'], resolve);
        } else if (component.startsWith("Sys")) {
          require(['../views/sys/' + component + '.vue'], resolve);
        }
      }
    }
    fmRoutes.push(fmRouter);
  })
  return fmRoutes;
} */
