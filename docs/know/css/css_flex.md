---
title: flex弹性盒模型简单入门
date: 
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - css
 - flex
 - 布局
publish: false
autoGroup-1: 运用
# autoPrev:
---

简单介绍flex,不进行深度介绍详细参阅:

[阮一峰 Flex 布局教程:语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[阮一峰 Flex 布局教程:实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
<!-- more -->
***

## **1. 了解flex**
::: theorem flex
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。
::: right
来自 [阮一峰 Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
:::

任何一个容器都可以指定为 Flex 布局。
``` css
.box{
  display: flex;
}
```
行内元素也可以使用 Flex 布局。

``` css
.box{
  display: inline-flex;
}
```
Webkit 内核的浏览器，必须加上`-webkit`前缀。

``` css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

::: warning
设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。
:::

## 1.1 flex基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。

容器有三个要素：默认横向的**主轴**（main axis）、垂直于主轴**交叉轴**（cross axis）、内容过多需要换行形成的**轴线**

![阮一峰flex基本原理图](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

内部容器的显示方式也就是依靠这三样的排序方式来进行定位

单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## **2. 容器的属性**
以下6个属性设置在容器上。

+ flex-direction
+ flex-wrap
+ flex-flow
+ justify-content
+ align-items
+ align-content

### 2.1 `flex-direction`、`flex-wrap`、`flex-flow`

flex-direction属性决定主轴的方向（即内容的排列方向）。

有四个值：`flex-direction: row | row-reverse | column | column-reverse`

+ row（默认值）：主轴为水平方向，起点在左端。
+ row-reverse：主轴为水平方向，起点在右端。
+ column：主轴为垂直方向，起点在上沿。
+ column-reverse：主轴为垂直方向，起点在下沿。

![阮一峰flex-direction](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

***

flex-wrap属性定义，如果一条轴线排不下，如何换行。默认情况下，内容都排在一条线（又称"轴线"）上。

可能取三个值：`nowrap | wrap | wrap-reverse`

+ nowrap（默认）：不换行。
![阮一峰wrap属性](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)
+ wrap：换行，第一行在上方。
![阮一峰wrap属性](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)
+ wrap-reverse：换行，第一行在下方。
![阮一峰wrap属性](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

***

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`

***

::: tip
`flex-direction`、`flex-wrap`、`flex-flow`三个属性确定了内容之间的排列关系，可以理解为确定了队列形式
:::

### 2.2  `justify-content`、`align-items`、`align-content`

::: tip 相同部分
三个要素的排列方式都大相径庭

`justify-content`、`align-items`、`align-content`三个属性确定了三要素各自的对齐方式

对齐方式：头部对齐、尾部对齐、居中对齐、两端对齐、两侧的间隔相等对齐、底线对齐、延伸对齐
:::

***

`justify-content`属性定义了项目在主轴上的对齐方式，有5个值

+ flex-start（默认值）：左对齐
+ flex-end：右对齐
+ center： 居中
+ space-between：两端对齐，项目之间的间隔都相等。
+ space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

![justify-content](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

***

`align-items`属性定义项目在交叉轴上如何对齐，有5个值

+ flex-start：交叉轴的起点对齐。
+ flex-end：交叉轴的终点对齐。
+ center：交叉轴的中点对齐。
+ baseline: 项目的第一行文字的基线对齐。
+ stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

![align-items](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

***

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用，有6个值

+ flex-start：与交叉轴的起点对齐。
+ flex-end：与交叉轴的终点对齐。
+ center：与交叉轴的中点对齐。
+ space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
+ space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
+ stretch（默认值）：轴线占满整个交叉轴。

![align-items](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)


### 2.3 容器属性小结

+ `flex-direction`、`flex-wrap`、`flex-flow`
    - 三个属性确定了内容的排队方式
    - 理解为涉及整体的排列
+ `justify-content`、`align-items`、`align-content`
    - 三个属性确定内容之间的相对关系
    - `justify-content`->内容在主轴上的对齐方式
    - `align-items`->内容自身在交叉轴上位置
    - `align-content`->主轴换行后行之间的间隔关系

## **3. 项目的属性**