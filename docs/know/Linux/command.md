--- 
title: debian自带指令
date: 2021-08-19 11:00:01
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 服务器
tags: 
 - debian
 - linux
 - 指令
publish: true
# autoGroup-1: 
# autoPrev: 
---

记录debian系统下无需安装第三方的常用基础指令
<!-- more -->

对于Centos、Ubuntu、Debian之间的指令大同小异，部分会有所不同

## 1. 解压文件
将一个文件解压至某个目录
``` sh
# /home/xxx.tar.gz文件解压至/home/xxx
tar zxvf /home/xxx.tar.gz -C /home/xxx
```

## 2. 端口开放管理
使用 `iptables` 管理服务器的端口访问

确保系统带有iptables

::: danger
以下操作建议连接显示屏直接操作，不要使用shell工具远程连接
:::

### 2.1 关闭全部端口访问
``` sh
# ipv4下禁止所有外网访问
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT DROP
# ipv6下禁止所有外网访问
ip6tables -P INPUT DROP
ip6tables -P FORWARD DROP
ip6tables -P OUTPUT DROP
```

使用命令将系统ipv4和ipv6下的外网访问全部禁止

### 2.2 开启22与21端口内网访问
系统的22端口是shell远程连接的端口，21是ftp文件传输的端口

这两个端口可以开启局域内网访问，方便自己通过shell类软件连接使用

``` sh
# 开启192.168.0.1网管下内网访问22端口
iptables -A INPUT -s 192.168.0.0/24 -p tcp --dport 22 -j ACCEPT
iptables -A FORWARD -s 192.168.0.0/24 -p tcp --dport 22 -j ACCEPT
iptables -A OUTPUT -s 192.168.0.0/24 -p tcp --dport 22 -j ACCEPT
```
+ 以ipv4的方式局域内网访问22端口
+ ipv6无需开启

21、3306（数据库）、6379（redis）或其他端口内网访问同理

### 2.3 开启80端口外网访问
有些端口要开启外网访问，例如网站80
``` sh
# 开启ipv4外网访问
iptables -I INPUT -p tcp --dport 80 -j ACCEPT
iptables -I OUTPUT -p tcp --dport 80 -j ACCEPT

# 有NAT转发开启FORWARD
iptables -I FORWARD -p tcp --dport 80 -j ACCEPT

# 如果需要开启ipv6外网访问
ip6tables -I INPUT -p tcp --dport 80 -j ACCEPT
ip6tables -I OUTPUT -p tcp --dport 80 -j ACCEPT
ip6tables -I FORWARD -p tcp --dport 80 -j ACCEPT
```

### 2.4 保存配置
iptables的指令都是临时生效，下次开机就会消失

需要安装 `iptables-persistent` 保存决策
``` sh
# 安装iptables-persistent
apt-get install iptables-persistent

# 保存持久化规则
netfilter-persistent save
netfilter-persistent reload
```

## 3. 定时执行

摘自[Linux启动定时任务](https://blog.csdn.net/qq_38776582/article/details/101360988)
### 3.1 首先安装cron服务

``` sh
apt-get install cron
```
### 3.2 启动与关闭cron服务

``` sh
service cron start //启动服务
service cron stop //关闭服务
service cron restart //重启服务
service cron reload //重新载入配置
service cron status //查看crontab服务状态
```
### 3.3 编写启动服务脚本（以jmeter服务启动为列子）

`vim jmeter-start.sh` 创建sh文件

``` sh
#!/bin/bash
source /etc/profile
jmeter -n -t /jmeter/apache-jmeter-5.1.1/testcases/cases/jinritoutiaoguanzhu.jmx
```
### 3.4 定时启动服务，用到任务调度的crond常驻命令

`crontab -e`
在控制台写入以下内容：

``` sh
0 17 * * * /jmeter-start.sh
```

然后保存(ctrl+x,再按y)
注意：chmod 777 jmeter-start.sh 和 jinritoutiaoguanzhu.jmx
### 3.5 定时关闭jmeter服务，用到任务调度的crond常驻命令

``` sh
crontab -e
```

``` sh
50 22 * * * ps -ef|grep jmeter|sed -n 2p|awk '{print $2}'|xargs kill -9
```

参数解释：
sed -n 2p ##表示截取第二行数据
awk ‘{print $2}’ ##表示截取第二列数据
xargs ##表示作为参数供kill命令使用
### 3.6 定时任务例子：

``` sh
（1）表示每晚的21:30重启apache。
        30 21 * * * /usr/local/etc/rc.d/lighttpd restart
（2）表示每月1、10、22日的4 : 45重启apache。
        45 4 1,10,22 * * /usr/local/etc/rc.d/lighttpd restart
（3）表示每周六、周日的1 : 10重启apache。
        10 1 * * 6,0 /usr/local/etc/rc.d/lighttpd restart
（4）表示在每天18 : 00至23 : 00之间每隔30分钟重启apache。
        0,30 18-23 * * * /usr/local/etc/rc.d/lighttpd restart
（5）表示每星期六的11 : 00 pm重启apache。
        0 23 * * 6 /usr/local/etc/rc.d/lighttpd restart
（6）每一小时重启apache
        * */1 * * * /usr/local/etc/rc.d/lighttpd restart
（7）晚上11点到早上7点之间，每隔一小时重启apache
        * 23-7/1 * * * /usr/local/etc/rc.d/lighttpd restart
（8）每月的4号与每周一到周三的11点重启apache
        0 11 4 * mon-wed /usr/local/etc/rc.d/lighttpd restart
（9）一月一号的4点重启apache
        0 4 1 jan * /usr/local/etc/rc.d/lighttpd restart
（10）每半小时同步一下时间
        */30 * * * * /usr/sbin/ntpdate 210.72.145.44
（11）每天18 : 00至23 : 00之间每隔30分钟重启smb 
      0,30 18-23 * * * /etc/init.d/smb restart
```
### 3.7 查看调度任务

``` sh
crontab -l //列出当前的所有调度任务
crontab -l -u test //列出用户test的所有调度任务
```
### 3.8 删除任务调度工作

``` sh
crontab -r //删除所有任务调度工作
```
### 3.9 任务执行如果报错：

CRON[9435]: (CRON) info (No MTA installed, discarding output)
解决方法：apt-get install postfix
安装时一直按enter键