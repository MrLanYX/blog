--- 
title: Lodash中对象合并方法assign、merge、defaults、defaultsDeep
date: 2022-04-08 10:33:36
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - js
 - Lodash
 - 枚举
 - 转载
publish: true
# autoGroup-2: 
---

## _.assign(object, [sources])

分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性，数组和普通对象会递归合并。

``` js
_.assign({},{
    a:1,
},{
    a:undefined, // 继续覆盖
    b:[1,2],
    c:{c1:1,c2:null}
},{
    b:[4,5,6], // 继续覆盖
    c:{c1:2,c2:undefined} // 完全覆盖，不进行深度遍历
})
// 结果
{
    a: undefined,
    b: [4,5,6],
    c:{c1:2,c2:undefined}
}
```

## _.merge(object, [sources])

与 `assign` 类似，不同之处是 sources 中出现的 `undefined` 如果在 object 中存在值会跳过

``` js
_.merge({},{
    a:1,
},{
    a:undefined, // 跳过
    b:[1,2],
    c:{c1:1,c2:null}
},{
    b:[4,5,6], // 继续覆盖
    c:{c1:2,c2:undefined} // 递归 2 覆盖 1，`undefined` 跳过
})
// 结果
{
    a: 1,
    b: [4,5,6],
    c:{c1:2,c2:null}
}
```

## _.defaults

分配来源对象的可枚举属性到目标对象所有解析为 `undefined` 的属性上。 来源对象从左到右应用。 一旦设置了相同属性，后续的将被忽略掉。

``` js
_.defaults({},{
    a:undefined,
},{
    a:1, // 覆盖undefined
    b:[1,2],
    c:{c1:1,c2:null}
},{
    b:[4,5,6], // 完全跳过
    c:{c1:2,c2:undefined} // 不递归，跳过
})
// 结果
{
    a: 1,
    b: [1, 2],
    c: {c1: 1, c2: null}
}
```
## _.defaultsDeep

与 `defaults` 相似，不同是会深度遍历，有值的会跳过

``` js
_.defaultsDeep({},{
    a:undefined,
},{
    a:1, // 覆盖undefined
    b:[1,2],
    c:{c1:1,c2:undefined}
},{
    b:[4,5,6], // 深度遍历跳过 4，5
    c:{c1:2,c2:null} // 递归 2 跳过，null 覆盖 undefined
})
// 结果
{
    a: 1,
    b: [1, 2, 6],
    c: {c1: 1, c2: null}
}
```

***

::: tip 总结
+ assign：后面的会覆盖前面的对象属性，不会递归遍历。
+ merge: 后面的会覆盖前面的对象属性，会递归遍历。
+ defaults：前面的属性不为undefined且与后面属性名相同，后面的对象属性会被忽略，不会递归遍历。
+ defaultsDeep: 前面的属性不为undefined且与后面属性名相同，后面的对象属性会被忽略，会递归遍历。

assign和merge的关系就相当于defaults和defaultsDeep的关系。只不过参数顺序是相反的。
::: right
[原文](https://blog.csdn.net/qwe435541908/article/details/105008730/)
:::
