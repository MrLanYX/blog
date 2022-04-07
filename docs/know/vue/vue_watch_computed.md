---
title: Vue中的watch与computed
date: 2021-11-22 19:40:14
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - watch
 - computed
publish: true
# autoGroup-2: 
# autoPrev:
---
Vue中的watch与computed差异和应用环境
<!-- more -->
***

## **1. watch**
watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象。
::: danger
必须是data中已经存在的变量
:::
监听到目标的变化返回旧值和新值，自由对其进行下一步的处理
::: danger
尽量不要在对自身的监听中对自身赋值，这样会多次触发监听，导致各种各样的问题
:::

## **2. computed**
computed不需要在data中声明，能够直接在computed中定义，生命出来的变量与data中的数据拥有差不多的功能，一样使用，一样拥有watch监听能力。

差异：
- 不能直接赋值，computed中声明的变量值是其return的返回值
- computed中的声明途中对于data中数据的使用，只要其使用的data中的值变化就会触发computed中他的更新，这也就是取名为计算的原因

## 3. 运用
举个简单例子：
1. 有个商品data中声明了其单价和数量
2. computed中声明了个总价返回值是单价乘数量
当单价和数量任何一个改变时

computed中的总计就会立马更新

watch也可以对总价进行监听到达某个值的时候使用优惠卷