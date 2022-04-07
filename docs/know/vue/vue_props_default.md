---
title: 解决vue中props对象中属性设置默认值问题
date: 2022-03-31 11:09:27
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - props
 - 转载
publish: true
# autoGroup-1: 
# autoPrev:
---

转载[解决 vue中props对象中设置多个默认值问题](https://blog.csdn.net/weixin_42288182/article/details/107222203)
<!-- more -->

***

## 1. vue中props设置对象默认值

一般情况下设置默认值的方式:

``` js
props: { 
    paramsObj: {
    type:Object,
        default:() => {
            return {
                tabList: [],
                tableFixedHeader: [],
                showHandleCol:false,
                handleType:[], 
                isTagData:false,
         	}
     	}
    }
},
```

父组件传过来的 `paramsObj` 对象会将默认值的**完全覆盖**，如果恰巧**传过来的值不够完整**的话，就会导致子组件的 `paramsObj` 在使用时缺少部分对象

主要原因还是 `default` 只会在没有传值时生效

## 1. 解决props对象属性默认值丢失问题

解决方式也很方便，只需要子组件使用的真正对象是**默认值**和**传递值**的**合并**就行

使用 `computed` 实现：

``` js
props: { 
	paramsObj: {
         type:Object,
         default:() => {
             return {}
         }
     }
 },
 computed:{
     params(){ 
         return Object.assign({
             tabList: [],
             tableFixedHeader: [],
             showHandleCol:false,
             handleType:[], 
             isTagData:false,
         },this.paramsObj);
     }
 },
```