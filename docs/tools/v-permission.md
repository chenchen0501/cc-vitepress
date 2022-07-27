# v-permission

## 库

```js{6}
import Vue from 'vue'

// 自定义指令-根据权限显示按钮
Vue.directive('permission', {
  inserted: function (el, { value }) {
    const arr = [] // todo 权限数组根据实际情况获取

    if (!arr.includes(value)) {
      el.parentNode.removeChild(el)
    }
  },
})
```
::: tip
在`main.js`中引入即可。vue3自行转换。
:::