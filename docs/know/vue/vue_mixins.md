---
title: vue的mixins
date: 2021-12-02 13:26:58
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - mixin
publish: true
# autoGroup-2: 
# autoPrev:
---

## **1. mixins介绍**
官方描述：混入 (mixins)是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

总结起来就是将一个vue自身的各个周期钩子等融入另外一个组件中

## **2. 使用方式**
``` js
// 定义一个混录对象，结构按照vue
export const mixin = {
    data(){
        return{
            mixin:1
        }
    },
    created(){
        console.log("mixin")
    }
}
// 把混入对象混入到当前的组件中
<template>
    <div>
        组件
    </div>
</template>
import mixin from './mixin.js'
export default {
    data(){
        return{
            value:1
        }
    },
    mixins:[mixin],
    created(){
        console.log(1)
    }
}
```
这样混入的结果会是的组件中拥有混入对象的对应方法和参数
``` js
// 最终的结果
<template>
    <div>
        组件
    </div>
</template>
import mixin from './mixin.js'
export default {
    data(){
        return{
            mixin:1,
            value:1
        }
    },
    mixins:[mixin],
    created(){
        console.log("mixin")
        console.log(1)
    }
}
```
### **3. 注意事项**

### 3.1 执行顺序
混入对象的data赋值,created,mounted等生命周期会在组件之前

如果有相同的会被组件的覆盖，以组件自身的为准

### 3.2完全独立
不同的组件之间融入了相同的mixin

再各自内修改融入过来的变量或者方法，并不会互相影响

mixin相当于完全拷贝致自己中，与其他组件的mixin完全独立，mixin的方法调用到自身不存在的变量也会在父级中寻找

---

``` js
// 定义一个混录对象
export const mixin = {
    data(){
        return{
            mixin:1
        }
    },
    created(){
        console.log(this.mixin)
        console.log(this.value)
    }
}

// 第一个vue文件
import mixin from './mixin.js'
export default {
    data(){
        return{
            value:1
        }
    },
    mixins:[mixin],
    created(){
        // 1.这里会融入mixin自身的created
        // 2.this.mixin自身存在输出 1
        // 3.this.value向上查找vue自带输出 1

        this.mixin=2
        // 修改mixin中mixin的值为2 仅仅在本vue中生效
    }
}

// 第二个vue文件
import mixin from './mixin.js'
export default {
    data(){
        return{
            mixin:1,
            value:1
        }
    },
    mixins:[mixin],
    created(){
        // 依旧正常输出
        // 1.这里会融入mixin自身的created
        // 2.this.mixin自身存在输出 1 (上个文件对this.mixin的修改在此文件不影响)
        // 3.this.value向上查找vue自带输出 1
    }
}
```