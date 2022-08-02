## 虚拟dom

### 含义
1. 用js对象来描述真实dom
2. 定义VNode类，来描述虚拟dom
3. 编译时将template里面的dom转为虚拟dom，当数据更新时，将vNode与之前的vNode进行对比差异，然后将这些差异更新到真实的dom上

## diff算法
1. 上述提到的"差异"就成了问题的关键，因此vue用diff算法来寻找这些"差异"
2. vue中把寻找diff的过程，称之为patch（补丁）。对旧dom打补丁，更新为新的dom

### 本质
将oldVnode通过patch更新成newVnode

### 做法
1. 创建dom（oldVnode没有，newVnode有）
2. 删除dom（oldVnode有，newVnode没有）
3. 更新dom（oldVnode、newVnode都有）
   1. 静态节点 - 无需更新，因为不存在变量
   2. 纯文本节点
        1. 用新文本直接替换即可
   3. 元素节点
      1. newVnode包含子节点
         1. oldVnode包含子节点
            1. 递归比较（重点，下面单独说明）
         2. oldVnode不包含子节点
            1. oldVnode是空节点
               1. 将newVnode的子节点创建后insert
            2. oldVnode是文本节点
               1. 文本节点清空，将newVnode的子节点创建后insert
      2. newVnode不包含子节点
         1. 说明该节点是空节点，直接清空oldVnode


#### 更新子节点
做法：双层遍历newChildren（外循环）、oldChildren（内循环）

1. 创建子节点
   1. 在oldChildren中找不到相同的节点，则创建newChildren中的子节点
2. 删除子节点
   1. 遍历结束，在oldChildren仍存在为遍历到的子节点
3. 移动子节点
   1. 找到了相同的节点，但是位置不同
4. 更新子节点
   1. 找到了相同的节点，位置也相同，更新old子节点与新节点相同