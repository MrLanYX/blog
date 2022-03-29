---
title: jsorg免费二级域名
date: 2021-12-02 14:25:24
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
 - 服务器
tags: 
 - vue
 - js.org
publish: true
# autoGroup-1:
# autoPrev:
---

利用js.org申请二级域名部署在GitHub的vuepress博客
::: danger
time:2021-12-08 js.org关闭个人页面、博客等非NPM包，库，与JavaScript有明确直接关系的工具等项目的授权
:::
<!-- more -->
***

## **1. js.org**

::: theorem 官网描述
Are you a JavaScript developer looking for free webspace to host your project?
Check out GitHub Pages. 
To make things perfect we provide you with a free and sleek URL as shown in the examples above.
We don't mind whether it's a User-, Organization- or Project-Page - as long as you provide some reasonable content! 
Just follow these four steps to get your own free JS.ORG subdomain for your GitHub Page
::: right
来自 [官网](https://js.org/) [仓库地址](https://github.com/js-org/js.org/)
:::

::: details 翻译
您是否是一名JavaScript开发人员，正在寻找免费的Web空间来承载您的项目？
查看GitHub页面。
为了使事情变得完美，我们提供了一个免费和圆滑的网址，如上面的例子所示。
我们不介意它是用户页面、组织页面还是项目页面——只要您提供一些合理的内容！
只需按照以下四个步骤为GitHub页面获取您自己的免费JS.ORG子域
:::

优点：
+ 专门放置优化我们的GitHub Pages
+ 免费的二级域名
+ 还有免费https证书和cdn加速

## **2. 准备GitHub Pages**

GitHub的使用这里就不详细的介绍

1. 将你的网站(index.html)放入Github
2. 在setting中开启Pages功能
::: tip
GitHub Pages功能在[官网的介绍](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)中有两种形式的 page：

个人或组织的 page：只能存在一个，master 分支，地址为 xxx.github.io

项目 page：每个项目可以生成一个，gh-pages 分支，地址为 xxx.github.io/projectname

如果是第二种需要在项目打包的时候配置好相同的根路径
:::
3. 完成后测试下是否能通过提示的网址访问 `Your site is published at https://XXX.github.io/`

## **3. fork js.org仓库**

1. 进入[js.org的GitHub仓库](https://github.com/js-org/js.org)
2. 点击右上角Fork，fork仓库到你自己的仓库
3. 稍等一会儿刷新就可以看到仓库由js-org/js.org变成了USERNAME/js.org
4. 在自己的仓库里打开cnames_active.js，能够看见其他人申请的域名

## **4. 申请域名**

1. 先行想好自己想申请的二级域名，试着访问下否被占用
2. 按照字母顺序找到自己应该插入的位置
3. `"aaa": "USERNAME.github.io/blog"` 这样就代表通过 `http://aaa.js.org` 转发访问 `http://USERNAME.github.io/blog`
::: danger 注意
在上面打包的时候根目录的设置产生的一些问题需要注意

1. 默认打包：`USERNAME.github.io/blog`访问会出现问题，但是使用了`js.org`完整配置完后不会出现问题
2. 配置了根目录为`blog`进行打包：`USERNAME.github.io/blog`访问不会出现问题，但是使用了`js.org`完整配置完后会出现问题
3. `github.io`和转发`js.org`域名访问在一个仓库中只能使用一个，不能同时访问
::: right
详情 [vue根目录解读](../../know/vue/gen_mu_lu_pei_zhi.md)
:::
4. 之后返回你的USERNAME/js.org，点击Pull requests，向js.org发送一个申请
> 标题：你要申请的域名，如：aaa.js.org
> 
> 内容：会自动帮你写好，不用更改
5. 接受条款和条件
6. 回到要申请的仓库里，在setting的pages里面输入你的.js.org域名
::: tip
`在setting的pages里面输入你的.js.org域名`这一步操作能够简化

作为 `gh-pages` 分支的根目录中添加名字为`CNAME`文件填写js.org域名（不带引号和http）

如此就不需要每次强制提交修改设置
:::
![image](./img/20211206160218.png)
1. 到[https://github.com/js-org/js.org](https://github.com/js-org/js.org)的`Pull requests`就可以看到你的申请,等待申请通过即刻