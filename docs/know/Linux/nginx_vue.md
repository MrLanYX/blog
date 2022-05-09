--- 
title: nginx 一个 server 服务配置多个二级域名
date: 2022-05-07 11:31:13
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 服务器
 - 前端
tags: 
 - linux
 - nginx
publish: true
# autoGroup-2: 
# autoPrev: 
---

一台服务器开启了nginx的一个server服务（例如：80、443），但是需要多个域名进入走向不同的前端

<!-- more -->
**假设文件路径结构：**

- `/home/www/imlyx.top`
- `/home/www/www.imlyx.top`
- `/home/www/blog.imlyx.top`

**nginx配置**

利用正则来匹配文件路径

```
server {
    listen       80 default_server;
    # $1 = '' || 'www.' || 'blog.' ; $3 = 'imlyx.top'
    server_name  ~* (\w+\.)?(imlyx\.top)$; 

    root /home/www/$1$3
    
    location / {
        try_files $uri $uri/ /index.html;
        index index.html;
    }

    # include ./img-cache.conf

    # error_page 404 /404.html;

    # error_page 500 502 503 504 /50x.html;
}
```