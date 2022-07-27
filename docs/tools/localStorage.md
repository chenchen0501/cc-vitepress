# localStorage

## 1. 通用localStorage库
```js
export default {
  //存储
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  //取出数据
  get(key) {
    if (!key) return undefined;

    const value = localStorage.getItem(key);
    if (!value) return undefined;
    return JSON.parse(value);
  },
  // 删除数据
  remove(key) {
    localStorage.removeItem(key);
  },
  // 清空数据
  clear() {
    localStorage.clear();
  },
};
```

### 使用
```js
import ls from <实际path>

ls.set('name', cc)
ls.get('cc')
ls.remove('cc')
ls.clear()
```




##  2. 存储token的特殊库
```js{1}
const TokenKey = "Admin-Token"; // 根据需求自行修改

export function getToken(TokenKey) {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken(TokenKey) {
  return localStorage.removeItem(TokenKey);
}
```

### 使用
```js
import { getToken, setToken, removeToken } from <实际path>
```