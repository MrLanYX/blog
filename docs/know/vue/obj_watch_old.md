--- 
title: vue的watch监听复杂数据（数组和对象）无法取得旧值的解决方法
date: 2022-05-07 11:45:57
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - watch
 - computed
publish: true
---

vue 的 watch 监听开启深度能够监听变化，却没法取得旧值

<!-- more -->
watch 没法监听到复杂数据的旧值是因为vue没有对复杂数据旧值进行存储，和简单数据还是有很大的差别

解决方式：

利用 computed 计算属性在监听对象每次变化时重新引出一个新的对象进行赋值，利用覆盖的方式让 watch 记录旧值

``` js
new Vue({
    data: {
        arr: [1, 2, 3],
    },
    methods: {
    },
    computed: {
        arr_copy() {
            // 深拷贝返回一个新地址数据
            return JSON.parse(JSON.stringify(this.arr));
        }
    },
    watch: {
        newarr: {
            handler(newval, oldval) {
                // 能够记录每次的新旧值
                console.log(newval, oldval);
            }
        }
    }
})
```