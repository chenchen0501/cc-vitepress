# v-loadmore

::: warning 注意
仅针对element-ui中的el-select
:::

## 库

```js
import Vue from 'vue'

// 下拉选滚动加载
Vue.directive('loadmore', {
  bind(el, binding) {
    // 获取element-ui定义好的scroll盒子
    const SELECTWRAP_DOM = el.querySelector(
      '.el-select-dropdown .el-select-dropdown__wrap'
    )
    SELECTWRAP_DOM.addEventListener(
      'scroll',
      _.debounce(function () {
        const CONDITION =
          this.scrollHeight - this.scrollTop - 5 <= this.clientHeight
        if (CONDITION) {
          binding.value()
        }
      }, 2000)
    )
  },
})
```

::: tip
在`main.js`中引入即可。vue3自行转换。
:::