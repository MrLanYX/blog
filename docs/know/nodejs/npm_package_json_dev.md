--- 
title: NPM关于 dependencies 和 devDependencies 配置详解
date: 2022-04-06 08:47:32
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - nodejs
 - js
 - dependencies
publish: true
# autoGroup-1: 
# autoPrev: 
---

## NPM安装环境

NPM 作为常用的依赖包管理工具，安装依赖的时候有三个安装环境

1. 默认系统的安装目录

``` sh
npm install vue
```

默认会把依赖安装至用户nodejs安装位置，作为全局的依赖，任何项目都可以调用的依赖

2. 生产环境下 `dependencies`

``` sh
npm install --save vue
// 简写
npm i -S vue
```

3. 开发环境下 `devDependencies`

``` sh
npm install --save-dev vue
// 简写
npm i -D vue
```

## npm run 选择环境

生产环境选择较为稳定压缩过的版本。开发可以选择带有日志调试未压缩等功能的版本。

启动或打包的时候可以在 `package.json` 配置中指定版本

``` json
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "scripts": {
    "dev": "vue-cli-service serve NODE_ENV=devDependencies",
    "build": "vue-cli-service build NODE_ENV=development",
  },
}
```