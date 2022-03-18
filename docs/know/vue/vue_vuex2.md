--- 
title: 利用VueX管理全局数据（二）
date: 2022-03-18 13:51:38
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - vuex
 - store
publish: false
autoGroup-2: 知识点
autoPrev: vue_vuex1
---

第二篇讲述VueX的使用时的写法和各个结构方法
<!-- more -->

## **1. VueX的安装**

在vuecli脚手架构建的项目下运行

``` sh
npm install vuex@next --save
```

其他方式可见[官网](https://vuex.vuejs.org/zh/installation.html)

## **2. VueX的核心概念**

简述VueX的核心的基本概念

+ State
    - 存放状态
    - 使用 `mapState` 辅助函数批量取状态
+ Getter
    - 从 store 中的 state 中获取处理版状态
    - 使用 `mapGetters` 辅助函数批量获取处理版状态
+ Mutation
    - 变更、更新状态
    - 同步提交
    - 使用 `mapMutations` 辅助函数提交
+ Action
    - Action 类似于 mutation
    - 可以异步
    - Action 是触发 mutation 进行提交
+ Module
    - 分割模块
    - 最后合并进 store

### 2.1 VueX - State

Vuex 使用单一状态树，代表着着每个应用将仅仅包含一个 store 实例，全部都在 `this.$store` 一个对象中

::: tip
Vuex 通过 Vue 的插件系统将 store 实例从根组件中“注入”到所有的子组件里，所以在任何组件都能够通过`this.$store`获取到VueX实例出的状态
:::

通常情况我们在组件的 `computed` 中使用VueX的状态

这样保证了状态更新了能够获取最新的状态

``` js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```


### 2.2 VueX - Getter


### 2.3 VueX - Mutation


### 2.4 VueX - Action


### 2.5 VueX - Module

