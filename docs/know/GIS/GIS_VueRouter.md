--- 
title: GIS三维地图与VueRouter产生小问题
date: 2021-05-26 09:51:39
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
 - 地图
tags: 
 - vue
 - router
 - GIS
publish: true
autoGroup-1: 与vue组合
---
在跳转路由进入路由页面后，进行页面的刷新导致组件内工具的实例化缺少initialView
::: danger
地图初始化页面
``` js
mounted() {
    window.initial = new this.$map.InitialView()
}
```
地图初始化页面的子路由页面
``` js
mounted() {
    window.vAn = new this.$map.VisionAnalysis(window.initial);
}
// 此页面刷新缺少 window.initial
```
:::
<!-- more -->
***
## **1. 描述**
## **2. 解决**