
使用场景：vant3中van-list组件的列表请求hooks。

## 库

::: tip
1. 分页参数
2. 反参格式

根据实际情况进行调整
:::


```js
// van-list列表查询hooks
export const useList = (
  request,
  query,
  option = {
    isPage: true,
  }
) => {
  const loading = ref(false);
  // 是否结束
  const finished = ref(false);

  const list = ref([]);
  // 分页参数
  const pageParams = ref({ current: 1, pageSize: 10 });
  // 上次查询条件
  const queryParams = ref({});

  const onLoad = async () => {
    // 若分页，查询条件合并
    let payload = {
      ...query.value,
      ...pageParams.value,
    };

    loading.value = true;
    const res = await request(option.isPage ? payload : query);
    loading.value = false;

    const { data, total } = res;
    if (option.isPage) {
      // 分页
      list.value.push(...data);
      if (list.value.length === total) {
        finished.value = true;
      } else {
        pageParams.value.current++;
        queryParams.value = { ...query.value };
      }
    } else {
      // 不分页
      list.value = data;
      finished.value = true;
    }
  };

  return {
    loading,
    finished,
    list,
    onLoad,
    pageParams,
  };
};
```

## 重置刷新列表
```js
const refreshList = () => {
  pageParams.value.current = 1;
  list.value = [];
  loading.value = true;
  finished.value = false;
  onLoad();
};
```
::: tip
finished重新置为false，再调用onload，列表才会重新请求。
:::