# localStorage

## 关键字：

5M	前端数据库	永久存储

## 获取对象：

```js
var storage = localStorage;
```

::: tip

完整格式为：var storage = window.localStorage，由于window是全局对象，可以省略。

:::

## 三种写入方式：

```js
//写入a字段     
storage["a"] = 1;     
//写入b字段     
storage.b = 1;     
//写入c字段     
storage.setItem("c",3);
```

针对不同情况，大家可以自行选择使用。

## 三种读取方式：

```js
//第一种方法读取     
var a=storage.a;     console.log(a);     
//第二种方法读取     
var b=storage["b"];  console.log(b);     
//第三种方法读取     
var c=storage.getItem("c");
```

## 清除所有：

storage.clear();

## 清除一对：

storage.removeItem("a");

## 常用：

1. **写入我们接口返回的数据（json格式）**

```js
var storage=localStorage; 
var data={  
    name:'xiecanyong',     
    sex:'man',     
    hobby:'program' 
}; 
var d=JSON.stringify(data); 
storage.setItem("data",d); 
//将JSON字符串转换成为JSON对象输出 
var json=storage.getItem("data"); 
var jsonObj=JSON.parse(json); 
console.log(typeof jsonObj);
```

注意：

在localStorage中**只能以字符串的形式进行保存**，所以在存入localStorage之前，我们需要将json格式的数据进行转化成string格式。

2. **遍历localStorage中的所有数据**

```js
for(var i=0; i<localStorage.length;i++){		  
   console.log('第'+i+'条数据key为：'+localStorage.key(i)+',value为：'+localStorage.getItem(localStorage.key(i)));		
}
```

其中：

localStorage.key(i)，表示在lcoalStorage中第i下标的key值。