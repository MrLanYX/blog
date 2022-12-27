--- 
title: 前端获取流下载压缩文件损坏
date: 2022-12-27 10:58:39
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - Blob
publish: true
# autoGroup-1: 
# autoPrev: 
--- 

前端获取到文件流，简单文件能够正常打开（例如 txt）但是压缩文件出现损坏或者乱码
<!-- more -->

出现原因：

这种情况一般是请求被什么污染了`responseType`，例如拦截器或者Mockjs

只要在请求中重新指定好类型 `responseType: "arraybuffer"` 即可