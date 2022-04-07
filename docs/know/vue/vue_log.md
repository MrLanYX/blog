--- 
title: vue 打包去掉console.log
date: 2022-03-11 17:17:53
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - console
 - webpack
publish: true
# autoGroup-2: 
# autoPrev: 
---

webpack、vueconfig配置去除项目中的 `console.log()` 打印
<!-- more -->

***

## 去除代码中console.log打印

``` js
module.exports = {
  lintOnSave: true,
  // 配置webpack打包
  configureWebpack: (config) => {
    // 取消console打印    
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
},
```