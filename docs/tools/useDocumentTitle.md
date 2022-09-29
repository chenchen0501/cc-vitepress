# useDocumentTitle

## 库

```js
import { watch } from "vue";
import { useRoute } from "vue-router";

export const useDocumentTitle = () => {
  const route = useRoute();
    
  // 默认title，根据自身需求修改
  const defaultTitle = '默认title'
  watch(route, (val) => {
    document.title = val.meta.title || defaultTitle;
  });
};

```

