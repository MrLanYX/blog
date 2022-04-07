--- 
title: GIS三维地图与VueRouter产生小问题
date: 2021-05-26 09:51:39
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - router
 - gis
publish: true
# autoGroup-3: 
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
这个问题产生的主要原因：由于路由和子路由的mounted加载在同时引起

主路由的initial还未初始化完成导致后续缺少数据
## **2. 解决**
有两种解决方案，效果也不同，顺便在此记录一种刷新方式
### 2.1 方案一、重新路由
劫持案件重新路由
``` js
document.onkeydown = function(e) { //键盘按键控制
    e = e || window.event;
    if ((e.ctrlKey && e.keyCode == 82) || e.keyCode == 116) { //ctrl+R和F5刷新
        ts.$router.push({ name: 'index' })
        // return false;
    }
}
```
### 2.2 方案二、nextTick
子路由的实例化在nextTick内执行
``` js
this.$nextTick(() => {
    window.vAn = new this.$map.VisionAnalysis(window.initial);
});
```