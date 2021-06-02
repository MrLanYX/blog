--- 
title: VuePress的README.md
date: 2021-06-01 10:40:43
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - vuepress
publish: true
autoGroup-1: vuepress
autoPrev: vuepress_config
---

博客创建指南第三章
<!-- more -->

***
## **1. docs下的README.md**
默认的主题提供了一个首页（Homepage）的布局 (用于 [vuepress首页](https://vuepress.vuejs.org/zh/))。
作为一个个人的博客，这样的首页显然不具备阅读性，也不够美观，在后面的篇章中会介绍主题首页的配置
### **1.1 生成首页**
想要使用它，需要在你的根级 README.md 的 YAML front matter 指定 home: true。
``` yaml
---
home: true
---
```
### **1.2 首页markdown文件配置**
以下是vuepress官网首页的例子：
``` yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
### **1.2 主题首页markdown文件**
在reco主题中的首页markdown文件没有过多的配置项

本篇博客的首页内容如下：
``` yaml
---
home: true
bgImage: '/img/bg.jpg'
bgImageStyle: {
  height: '800px'
}
---
```
可以看到内容非常的少，如不配置任何东西，采用主题默认美观效果也很不错

详细可以参考[reco主题](http://vuepress-theme-reco.recoluan.com/)官方配置
## **2. 普通目录下的README.md**
`docs`文件下除`.vuepress`以外的文件夹称为普通目录
### **2.1 文件夹下markdown作用**
拥有文件`README.md`后就具有路由的能力

配置了顶部导航和测导航能够直接跳转，也可以直接输入url跳转
### **2.2 文件夹下markdown配置**
``` yaml
--- 
title: (标题)
date: (时间)
author: (作者)
sidebar: (侧标题属性)
categories: 
 - (分类)
tags: 
 - (标签)
publish: (是否发布)
autoGroup-1: (侧标签所属分类)
autoPrev: (位于某文件后)
---
```
+ `title`：文章标题，不填写默认使用文档中的一级标题`# 一级标题`
+ `date`：记录文件的创建日期，用于排序和显示（vscode用户推荐使用插件Insert Date String快捷键ctrl + shift + i 生成当前时间）
+ `author`：文章作者，用于多人同博客区分，可不填
+ `sidebar`：右侧文件内标题导航，建议开启（`sidebar: 'auto'`）
+ `categories`和`tags`：reco主题自带的分类和标签功能
    - 需要引用主题后在`config.js`中添加额外的顶部导航
    ``` js
    themeConfig: {
        blogConfig: { // 插入的顶部导航栏
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            }
        },
    }
    ```
    - 无需在`nav.js`中额外设置
+ `publish`：是否发布`true`或`false`
  ::: danger
  publish配置真假并不影响文件的构建生成，false只是不在首页的列表中显示

  适用于每个文件夹的README.md文件

  这个文件必要但不适合命名书写主要内容，更适合大纲描述
  :::
+ `autoGroup-1`：测导航分组分类
    - 同名分组的文件将被整合在一起
    - 分组排序顺序如下
    - `autoGroup+2`>`autoGroup+1`>`autoGroup-1`>`autoGroup-2`
+ `autoPrev`：组内排序
    - 当前文件排在谁的后面
    - 填写前一个文件的名字不需要带`.md`

以上为个人认为的常用属性

更为详细的属性访问[vuepress-auto-sidebar](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/)官网查看