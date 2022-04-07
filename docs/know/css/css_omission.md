---
title: 文字省略
date: 2021-11-20 19:39:35
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - css
publish: true
# autoGroup-1: 
# autoPrev:
---
利用css进行文字末尾省略
<!-- more -->
***

## **解决**
+ 一行
	``` css
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-all;
	```
+ 两行
	``` css
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
	```
1. -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性
2. display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
3. -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。