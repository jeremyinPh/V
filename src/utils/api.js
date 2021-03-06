import axios from 'axios';
import { Message } from 'element-ui';
import router from '../router/router';

// 添加响应连接器
axios.interceptors.response.use((success) => {
  // 对响应数据做点什么
  if (success.status && success.status == 200 && success.data.status == 500) {
    Message.error({ message: success.data.msg });
    return;
  }
  if (success.data.msg) {
    Message.success({ message: success.data.msg });
  }
  return success.data;
}, (error) => {
  // 对响应错误做点什么
  if (error.response.status == 504 || error.response.status == 404) {
    Message.error({ message: '服务器被吃了( ╯□╰ )' });
  } else if (error.response.status == 403) {
    Message.error({ message: '权限不足，请联系管理员' });
  } else if (error.response.status == 401) {
    Message.error({ message: '尚未登录，请登录' });
    router.replace('/');
  } else if (error.response.data.msg) {
    Message.error({ message: error.response.data.msg });
  } else {
    Message.error({ message: '未知错误!' });
  }
});

const base = '';

export const postKeyValueRequest = (url, params) => axios({
  method: 'post',
  url: `${base}${url}`,
  data: params,
  transformRequest: [function (data) { // 允许在向服务器发送前，修改请求数据
    let ret = '';
    for (const i in data) {
      ret += `${encodeURIComponent(i)}=${encodeURIComponent(data[i])}&`;
    }
    return ret;
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
export const postRequest = (url, params) => axios({
  method: 'post',
  url: `${base}${url}`,
  data: params,
});
export const putRequest = (url, params) => axios({
  method: 'put',
  url: `${base}${url}`,
  data: params,
});
export const getRequest = (url, params) => axios({
  method: 'get',
  url: `${base}${url}`,
  data: params,
});
export const deleteRequest = (url, params) => axios({
  method: 'delete',
  url: `${base}${url}`,
  data: params,
});
