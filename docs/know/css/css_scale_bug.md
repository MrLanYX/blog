---
title: tansform的模糊bug
date: 2021-11-21 19:39:42
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - css
 - bug
publish: true
# autoGroup-2: 
# autoPrev:
---
CSS3中使用tansform的scale导致文字抖动以及模糊的解决办法,转载[原文](https://www.cnblogs.com/wuzhi123/p/8686422.html)
<!-- more -->
***

## **1. 问题描述**
在给元素进行制作scale缩放动画的时候会导致文字产生闪烁或者模糊的问题
![avatar](./img/bug1.gif)
再有有时缩放会导致边缘产生模糊的边框残影等问题
image

## **2. 解决方案**
1. 在该动画的transform里加上translateZ(0)值, 能解决文字抖动的问题，但是没解决文字模糊的问题。
2. 在发生文字模糊的地方加上transform: translate3d(0,0,0)，解决文字模糊以及的问题。
3. 产生残影解决方案是将缩放从小数变1，不要从1变大