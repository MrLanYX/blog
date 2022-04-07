--- 
title: Linux更新阿里云域名IP，实现DDNS功能（支持IPv4和IPv6）（shell版）
date: 2022-04-02 14:56:24
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 服务器
tags: 
 - linux
 - ddns
 - shell
 - 转载
publish: true
# autoGroup-1: 
# autoPrev: 
---

转载至[https://www.right.com.cn/forum/thread-1522056-1-1.html](https://www.right.com.cn/forum/thread-1522056-1-1.html)
<!-- more -->
## ddns阿里云（shell版）

``` sh
#!/bin/bash
set -e

#================================================================================================================#
# 功能：用于更新阿里云域名IP，实现DDNS功能
#
# 在 http://www.gebi1.com/forum.php?mod=viewthread&tid=287344&page=1&_dsign=8f94f74c 提供的脚本文件基础上修改的。
# ghui, modified 12/2/2019
# 在 N1 debian Buster with Armbian Linux 5.3.0-aml-g12 手动执行/定时任务(crontab)执行测试通过
#================================================================================================================#

#--------------------------------------------------------------
# 参数
#
# (*)阿里云 AccessKeyId 
aliddns_ak=$1 
# (*)阿里云 AccessKeySecret 
aliddns_sk=$2 

# (*)域名：test.mydomain.com 
aliddns_subdomain=$3 #'test'
aliddns_domain=$4 #'mydomain.com'

# (*)ip地址类型：'A' 或 'AAAA'，代表ipv4 和 ipv6
aliddns_iptype=$5 # 'A' 或 'AAAA'，代表ipv4 和 ipv6

# TTL 默认10分钟 = 600秒 
aliddns_ttl=$6 #"600"

#--------------------------------------------------------------

machine_ip=""
ddns_ip=""
aliddns_record_id=""

if [ "$aliddns_subdomain" = "@" ]
then
  aliddns_name=$aliddns_domain
else
  aliddns_name=$aliddns_subdomain.$aliddns_domain
fi

now=`date`
echo "**************************************************"
echo "$now"
echo "$aliddns_name"

function getMachine_IPv4() {
    echo $(/usr/bin/wget -qO- -t1 -T2 http://ip.3322.net)
}

function getMachine_IPv6() {
    ipv6=`ip addr | grep "inet6.*global" | grep -v "deprecated" | awk '{print $2}' | awk -F"/" '{print $1}' | sed -n '1,1p'`
    echo $ipv6
}

function getDDNS_IP() {
    current_ip=`nslookup -query=$aliddns_iptype $aliddns_name | grep "Address" | grep -v "#53" | awk '{print $2}'`
    echo $current_ip
}

function urlencode() {
    # urlencode <string>
    out=""
    while read -n1 c
    do
        case $c in
            [a-zA-Z0-9._-]) out="$out$c" ;;
            *) out="$out`printf '%%%02X' "'$c"`" ;;
        esac
    done
    echo -n $out
}

function enc() {
    echo -n "$1" | urlencode
}

function send_request() {
    local args="AccessKeyId=$aliddns_ak&Action=$1&Format=json&$2&Version=2015-01-09"
    local hash=$(echo -n "GET&%2F&$(enc "$args")" | openssl dgst -sha1 -hmac "$aliddns_sk&" -binary | openssl base64)
    curl -s "http://alidns.aliyuncs.com/?$args&Signature=$(enc "$hash")"
}

function get_recordid() {
    grep -Eo '"RecordId":"[0-9]+"' | cut -d':' -f2 | tr -d '"'
}

function query_recordid() {
    send_request "DescribeSubDomainRecords" "SignatureMethod=HMAC-SHA1&SignatureNonce=$timestamp&SignatureVersion=1.0&SubDomain=$aliddns_name&Timestamp=$timestamp&Type=$aliddns_iptype"
}

function update_record() {
    send_request "UpdateDomainRecord" "RR=$aliddns_subdomain&RecordId=$1&SignatureMethod=HMAC-SHA1&SignatureNonce=$timestamp&SignatureVersion=1.0&TTL=$aliddns_ttl&Timestamp=$timestamp&Type=$aliddns_iptype&Value=$(enc $machine_ip)"
}

function add_record() {
    send_request "AddDomainRecord&DomainName=$aliddns_domain" "RR=$aliddns_subdomain&SignatureMethod=HMAC-SHA1&SignatureNonce=$timestamp&SignatureVersion=1.0&TTL=$aliddns_ttl&Timestamp=$timestamp&Type=$aliddns_iptype&Value=$(enc $machine_ip)"
}

if [ "$aliddns_iptype" = 'A' ]
then
    echo "ddns is IPv4."

    machine_ip=`echo "$(getMachine_IPv4)"`
    echo "machine_ip = $machine_ip"

    aliddns_record_id=$aliddnsipv4_record_id
else
    echo "ddns is IPv6."

    machine_ip=`echo "$(getMachine_IPv6)"`
    echo "machine_ip = $machine_ip"

    aliddns_record_id=$aliddnsipv6_record_id
fi

ddns_ip=`echo "$(getDDNS_IP)"`
echo "ddns_ip = $ddns_ip"

if [ "$machine_ip" = "" ]
then
    echo "machine_ip is empty!"
    exit 0
fi

if [ "$machine_ip" = "$ddns_ip" ]
then
    echo "skipping\n"
    exit 1
fi

echo "start update..."

timestamp=`date -u "+%Y-%m-%dT%H%%3A%M%%3A%SZ"`

if [ "$aliddns_record_id" = "" ]
then
    aliddns_record_id=`query_recordid | get_recordid`
    echo "----------------" $aliddns_record_id "\n"
    
    if [ "$aliddns_iptype" = 'A' ]
    then
        aliddnsipv4_record_id=$aliddns_record_id
    else
        aliddnsipv6_record_id=$aliddns_record_id
    fi
fi

#add support */%2A and @/%40 record
if [ "$aliddns_record_id" = "" ]
then
    echo "add record starting"

    aliddns_record_id=`add_record | get_recordid`

    if [ "$aliddns_record_id" = "" ]
    then
        echo "aliddns_record_id is empty. \n"
    else
        if [ "$aliddns_iptype" = 'A' ]
        then
            aliddnsipv4_record_id=$aliddns_record_id
        else
            aliddnsipv6_record_id=$aliddns_record_id
        fi

        echo "added record $aliddns_record_id \n"
    fi
else
    echo "update record starting"
    update_record $aliddns_record_id
    echo "updated record $aliddns_record_id \n"
fi

```

## 方法1. 外部参数

aliddns.sh `aliddns_ak` `aliddns_sk` `aliddns_subdomain` `aliddns_domain` `aliddns_iptype` `aliddns_ttl`

示例（A 代表 IPv4，AAAA 代表 IPv6）:
执行：aliddns.sh "xxxx" "xxx" "test" "mydomain.site" "A" 600
执行：aliddns.sh "xxxx" "xxx" "test" "mydomain.site" "AAAA" 600

::: warning
使用ipv4确定自己有公有的ipv4

使用ipv6需要开启了ipv6服务,可在[test-ipv6](http://www.test-ipv6.com/)测试
:::

## 方法2. 内部参数

修改源码，将$1,$2,$3,$4,$5,$6 替换为对应参数

示例:
aliddns_ak="xxxx"
aliddns_sk="xxx"
aliddns_subdomain="test"
aliddns_domain="mydomain.site"
aliddns_iptype="A"
aliddns_ttl=600


执行：aliddns.sh

在crontab（定时任务）定时执行。

*. 在 N1 debian Buster with Armbian Linux 5.3.0-aml-g12测试通过。