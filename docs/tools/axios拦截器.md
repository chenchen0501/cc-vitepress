# axios拦截器

::: warning 注意
以下库仅为参考，请根据实际情况进行部分修改。
:::
## 库
```js
import axios from "axios";
import { Message } from "element-ui"; // todo 根据实际情况修改
import { getToken, removeToken } from "@/utils/auth"; // todo 根据实际情况导入
import router from "@/router"; // todo  根据实际情况修改

const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, // todo baseURL根据直接情况引入
  timeout: 10000 // 请求超时设置
});

// request拦截
service.interceptors.request.use(config => {
  config.headers["token"] = getToken(); // todo token验证，字段名根据实际需求更改
  return config;
});

// response拦截
service.interceptors.response.use(
  response => {
    // 以下判断根据后端具体响应值进行更改
    const { status, msg } = response.data;

    // 成功
    if (status === 200) {
      return Promise.resolve(response.data);
    }

    // token过期
    if (status === 401) {
      Message.error("登录过期，请重新登录");
      removeToken(); // 清除token
      router.replace({ path: "/login" }); // todo 根据实际情况修改
      return Promise.reject(msg);
    }

    // 后端错误
    if (status === 500) {
      Message.error(msg);
      return Promise.reject(msg);
    }

    // 其余情况视为其他异常
    Message({
      message: msg || "系统错误",
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(response.data);
  },
  error => {
    Message({
      message: error.msg || "系统错误",
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
```