---
title: vuepres-reco优化
date: 2021-12-03 10:58:33
author: 'Mr.Lan'
sidebar: false
categories: 
 - 前端
tags: 
 - vue
 - vuepress
 - reco主题
publish: true
autoGroup-2: 主题应用
autoPrev: reco_plugins
---

优化之前的博客文件结构，减少没必要的文件
<!-- more -->

## **1. 子文件下的readme文件**
在原本的结构中每个文件想被识别为路由就应当在其下面放置一个 `README.md` 文件

例如：

文件夹`/docs/other/webextend`下存在一个`README.md` 文件

那么与之对应`http://localhost/docs/other/webextend` 就能够访问到此文章

在 `/docs/.vuepress/config.js` 配置中的 `nav` 就能够按照以下进行跳转
``` js
{
    text: '其他',
    icon: 'reco-other',
    link: '/other/',
    items: [
        { text: '浏览器扩展', link: '/other/webextend/' }
    ]
}, 
```

## **2. 优化**
这样的结构虽然是官方推荐的使用方式

但目录下readme通常没有内容可以写，当然也可以作为此文件夹的目录自信写入跳转链接

我这就不按照此方案，推荐插件优化结构

## **3. 具体实现**
安装插件 `npm i vuepress-plugin-permalink-pinyin --save-dev`

引入插件 `plugins.js`文件中新增一条
``` js
["permalink-pinyin"]
```

1. 插件permalink-pinyin能够将文件下的markdown文件生成网址
2. 文件夹下不要readme文件，但是配置中的跳转不能针对到文文件夹，要精准至文件，具体如下
   - `/docs/other/webextend`文件夹下只有一个 `测试.md` 文件
   - `nav` 的配置中继续沿用上面的设置将会出现404的情况
   - `{ text: '浏览器扩展', link: '/other/webextend/ce_shi' }` 配置需要精准到文件
3. markdown文件能够取中文名，跳转链接会自动转为拼音格式
   - 文件的取名中文会转成拼音
   - 每个字之间的连接符号可以在插件的配置中进行设置
``` js
["permalink-pinyin", {
    lowercase: true, // Converted into lowercase, default: true
    separator: '_' // Separator of the slug, default: '-'
}]
```
