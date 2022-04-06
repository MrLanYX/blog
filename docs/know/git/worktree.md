--- 
title: git worktree 处理切换分支依赖（node_modules）丢失
date: 2022-04-06 14:01:11
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - git
 - worktree
 - node_modules
publish: true
# autoGroup-1: 
# autoPrev: 
---

## 切换分支产生问题

当项目有很多个版本分支，并且需要共同维护频繁切换，那些没有加在管理中的文件（node_modules）就会在切换时清除，就需要频繁的安装依赖

这时使用git worktree将分支检出到另外其他文件夹，同时维护多分支，可以避免这个问题。

## worktree 分支导出

假设有两条分支 `master` 和 `br1`

在主分支的根目录下执行

``` sh
git worktree add ../branch1 br1
```

代表在上层目录创建 `branch1` 文件夹将 `br1` 导出

这样就有两个并行的文件夹分别代表 `master` 和 `br1` 两个分支，可以进行依赖下载分别开发。