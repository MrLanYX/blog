---
title: js中的hasOwnProperty
date: 2021-11-19
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - js
publish: true
# autoGroup-2: 
# autoPrev:
---

hasOwnProperty用来判断自身属性是否存在[原文](https://www.cnblogs.com/weiqinl/p/8683207.html)
<!-- more -->

## **1. 对象的hasOwnProperty方法**

Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。

### 1.1 判断自身属性

``` js
var o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');  // true
changeO();
o.hasOwnProperty('prop');  // false
```

### 1.2 判断自身属性与继承属性

``` js
function foo() {
  this.name = 'foo'
  this.sayHi = function () {
    console.log('Say Hi')
  }
}

foo.prototype.sayGoodBy = function () {
  console.log('Say Good By')
}

let myPro = new foo()

console.log(myPro.name) // foo
console.log(myPro.hasOwnProperty('name')) // true
console.log(myPro.hasOwnProperty('toString')) // false
console.log(myPro.hasOwnProperty('hasOwnProperty')) // fasle
console.log(myPro.hasOwnProperty('sayHi')) // true
console.log(myPro.hasOwnProperty('sayGoodBy')) // false
console.log('sayGoodBy' in myPro) // true
```

像后面几者都属于原型链上的方法不属于自身属性

::: tip
hasOwnProperty在`for...in...`中就能够起到过滤继承属性的作用
:::
## 2. hasOwnProperty被覆盖
属性声明时hasOwnProperty属性覆盖原有方法

``` js
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 始终返回 false

// 如果担心这种情况，可以直接使用原型链上真正的 hasOwnProperty 方法
// 使用另一个对象的`hasOwnProperty` 并且call
({}).hasOwnProperty.call(foo, 'bar'); // true

// 也可以使用 Object 原型上的 hasOwnProperty 属性
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```