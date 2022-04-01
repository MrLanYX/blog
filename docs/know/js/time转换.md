--- 
title: js处理时间(时间戳转化成日期格式、几分钟前，几个小时前等、视频时长)
date: 2022-04-01 09:16:49
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - js
 - 数据结构
 - 转载
publish: true
---

ji处理时间的常用方法，[转载文章](https://blog.csdn.net/pacholy/article/details/85098585)
<!-- more -->

## 时间戳转换成日期格式

``` js
format(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + "-";
    var M =
        (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) 
        + "-";
    var D = date.getDate() + " ";
    var h = date.getHours() + ":";
    var m = date.getMinutes() + ":";
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
},
```

## 倒序时间(刚刚，几分钟前，几个小时前，几天前，几周前，几个月前等)

``` js
before_time(dateTimeStamp) {
    var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfamonth = day * 15;
    var month = day * 30;
    var year = day * 365;
    var now = new Date().getTime(); //获取当前时间毫秒
    // console.log(now);
    var diffValue = now - dateTimeStamp; //时间差
    if (diffValue < 0) {
        return;
    }
    var minC = diffValue / minute; //计算时间差的分，时，天，周，月
    var hourC = diffValue / hour;
    var dayC = diffValue / day;
    var weekC = diffValue / week;
    var monthC = diffValue / month;
    var yearC = diffValue / year;
    var result;
    if (yearC >= 1) {
        result = " " + parseInt(yearC) + "年前";
    } else if (monthC >= 1 && monthC <= 12) {
        result = " " + parseInt(monthC) + "月前";
    } else if (weekC >= 1 && weekC <= 4) {
        result = " " + parseInt(weekC) + "周前";
    } else if (dayC >= 1 && dayC <= 7) {
        result = " " + parseInt(dayC) + "天前";
    } else if (hourC >= 1 && hourC <= 24) {
        result = " " + parseInt(hourC) + "小时前";
    } else if (minC >= 1 && minC <= 60) {
        result = " " + parseInt(minC) + "分钟前";
    } else if (diffValue >= 0 && diffValue <= minute) {
        result = "刚刚";
    } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth =
        datetime.getMonth() + 1 < 10
        ? "0" + (datetime.getMonth() + 1)
        : datetime.getMonth() + 1;
        var Ndate =
        datetime.getDate() < 10
        ? "0" + datetime.getDate()
        : datetime.getDate();
        var Nhour =
        datetime.getHours() < 10
        ? "0" + datetime.getHours()
        : datetime.getHours();
        var Nminute =
        datetime.getMinutes() < 10
        ? "0" + datetime.getMinutes()
        : datetime.getMinutes();
        var Nsecond =
        datetime.getSeconds() < 10
        ? "0" + datetime.getSeconds()
        : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate;
    }
    return result;
},
```

## 时间戳转化成视频时长

``` js
// 视频时长
formatTime(a) {
    var h = 0,
        i = 0,
        s = parseInt(a);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
        if (i > 60) {
            h = parseInt(i / 60);
            i = parseInt(i % 60);
        }
    }
    // 补零
    var zero = function (v) {
        return v >> 0 < 10 ? "0" + v : v;
    };
    let h2 = zero(h);
    let i2 = zero(i);
    let s2 = zero(s);
    let ok = "";
    if (h2 <= 0) {
        ok = [i2, s2].join(":");
    } else {
        ok = [h2, i2, s2].join(":");
    }
    return ok;
},
```