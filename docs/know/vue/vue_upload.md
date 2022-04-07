--- 
title: 分片上传
date: 2021-06-09 08:49:41
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - minio
 - upload
publish: true
# autoGroup-3: 
---
> 利用minio进行大文件的分片上传，分片上传的其中一种方式
<!-- more -->
***
## **1. 简述**
为什么分片和好处有以下几个点

+ 由于大文件上传时间问题会导致接口超时
+ 网络波动可能会导致中途的上传失败
+ 分片后能够获取上传进度
+ 分片能实现断点续传
+ 分片能实现同文件妙传

## **2. 大致实现**
1. 前端读取文件获取MD5
2. 按照每片大小计算总片数
3. 发起初始化请求参数就是文件的MD5和总片数
4. 后端校验文件是否存在是否有上传记录，返回minio的文件上传地址和其所对应的片号
5. 前端接收将文件进行切割，依次请求对应的minio地址
6. 等待全部上传完毕发起合并请求
7. 后端接收后开始合并所有文件，最后删除分片数据
8. 前端收到成功消息提交文件大小，文件名称，MD5或者能够作为文件标识的参数，并且附带额外的需求数据，例如文件所属用户，提交上级位置`parentId`等。让后端将文件路径与数据表关联（按应用场景需求，确认书否需要此步）

这样整体的分片上传思路就整理出来了
## **3. 代码编写**
这里只讲述前端的实现逻辑
### 3.1 组件准备
先进性所需要的数据字段准备
``` js
data() {
    return {
        chunkSize: 5 * 1024 * 1024,
        start: 0,
        end: 1,
        fileName: "",
        flag: false,
        Md5Chunk: 0,
        fileSize: 0,
        params: {}
    }
},
```
+ `chunkSize`：每片分片的大小单位字节
+ `start`：分片开始的片号，对应完成了的片数
+ `end`：分片截至的片号，对应总的片数
+ `fileName`：文件名字
+ `flag`：控制组件结束停止上传
+ `Md5Chunk`：已经计算了MD5的片数
+ `fileSize`：文件大小
+ `params`：上传额外参数

引入所需包
``` js
import SparkMD5 from 'spark-md5'
import $ from 'jquery'
```

### 3.2 获取文件
首先我们要让浏览器打开文件狂获取文件，而原本的文件获取框长得emmmm。。。

这里要把他隐藏起来通过我们自定义按钮点击方式去触发它
``` html
<template>
    <div>
        <input ref="inputUpload" type="file" @change="uploadFile" id="upload" style="display:none">
    </div>
</template>
```
在组件的封装方法methods中
``` js 
initData(params) {
    this.params = params
    this.start = 0
    this.end = 1
    this.fileName = ""
    this.flag = true
    this.Md5Chunk = 0
    this.fileSize = 0
    this.$refs.inputUpload.click()
},
```
`initData()`由我们自定义的按钮点击触发
+ 初始化我们即将用到的数据
+ 触发隐藏的`input`按钮的`click()`，打开文件选择框

***

``` js {2-10}
uploadFile() {
    let ts = this
    const file = document.getElementById("upload").files[0];
    ts.fileName = file.name
    ts.fileSize = file.size
    if (ts.fileSize <= ts.chunkSize) {
        console.log("上传的文件大于5m才能分片上传")
    }
    const chunkCount = Math.ceil(ts.fileSize / ts.chunkSize)
    ts.end = chunkCount
},
```
`@change="uploadFile"`触发，通过dom获取input中的文件数据

保存文件的名字、大小，并且计算需要分割多少片

如果文件大小没有超过设定的单片大小，可以`return`进行普通上传接口

### 3.3 计算MD5

``` js {1,11}
async uploadFile() {
    let ts = this
    const file = document.getElementById("upload").files[0];
    ts.fileName = file.name
    ts.fileSize = file.size
    if (ts.fileSize <= ts.chunkSize) {
        console.log("上传的文件大于5m才能分片上传")
    }
    const chunkCount = Math.ceil(ts.fileSize / ts.chunkSize)
    ts.end = chunkCount
    const fileMd5 = await ts.getFileMd5(file, chunkCount);
},
```
这里计算MD5的方法本身属于异步方式

为了不影响后续MD5的获取，将`uploadFile`改为同步方法，等待MD5计算完成

``` js
getFileMd5(file, chunks) {
    let fileReader = new FileReader()
    let spark = new SparkMD5.ArrayBuffer();
    let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
    let currentChunk = 0

    return new Promise((resolve) => {
        let loadNext = () => {
            let start = currentChunk * this.chunkSize;
            let end = ((start + this.chunkSize) >= file.size) ? file.size : start + this.chunkSize;
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
        };
        loadNext();
        fileReader.onload = e => {
            let a = spark.append(e.target.result);
            if (currentChunk < chunks) {
                this.Md5Chunk = ++currentChunk;
                loadNext();
            } else {
                let md5 = spark.end();
                resolve(md5)
            }
        };
    })
},
```
+ 首先实例化方法`fileReader`和`spark`
+ `start`和`end`计算出分割文件二进制的位置
+ `fileReader.readAsArrayBuffer()`读取文件触发`fileReader.onload`方法
+ 计算MD5写入`e.target.result`中
+ `currentChunk`自增，进入下一片MD5的计算，形成循环
+ 全部分片计算完成后返回MD5

::: tip
通过分片的方式计算MD5能够大大缩短大文件的计算时间，直接读取文件计算耗时过长
:::

### 3.4 上传分片

``` js {12-21}
async uploadFile() {
    let ts = this
    const file = document.getElementById("upload").files[0];
    ts.fileName = file.name
    ts.fileSize = file.size
    if (ts.fileSize <= ts.chunkSize) {
        console.log("上传的文件大于5m才能分片上传")
    }
    const chunkCount = Math.ceil(ts.fileSize / ts.chunkSize)
    ts.end = chunkCount
    const fileMd5 = await ts.getFileMd5(file, chunkCount);
    const initUploadParams = { chunkCount: chunkCount, fileMd5: fileMd5 }
    chunkUpload(initUploadParams).then(async (res) => {
        if (res.data.data.status === 200 || res.data.data.status === 0) {
            ts.composeFile(fileMd5, file.name, res.data.data.status)
            ts.start = ts.end
            return;
        }
        const chunkUploadUrls = res.data.data.chunkUploadUrls
        ts.start = ts.end - chunkUploadUrls.length
    })
},
```
+ 将MD5和分片数量传给后台
+ 后端将MD5进行对比
    - 存在文件返回状态码0，表示秒传
    - 所有分片全部上传完返回状态码200，表示只需合并
+ 否则初次上传或者断点续传，返回缺少分片的minio地址
+ 计算完成片数`ts.start`用于显示进度

``` js {21-38}
async uploadFile() {
    let ts = this
    const file = document.getElementById("upload").files[0];
    ts.fileName = file.name
    ts.fileSize = file.size
    if (ts.fileSize <= ts.chunkSize) {
        console.log("上传的文件大于5m才能分片上传")
    }
    const chunkCount = Math.ceil(ts.fileSize / ts.chunkSize)
    ts.end = chunkCount
    const fileMd5 = await ts.getFileMd5(file, chunkCount);
    const initUploadParams = { chunkCount: chunkCount, fileMd5: fileMd5 }
    chunkUpload(initUploadParams).then(async (res) => {
        if (res.data.data.status === 200 || res.data.data.status === 0) {
            ts.composeFile(fileMd5, file.name, res.data.data.status)
            ts.start = ts.end
            return;
        }
        const chunkUploadUrls = res.data.data.chunkUploadUrls
        ts.start = ts.end - chunkUploadUrls.length
        for (const item of chunkUploadUrls) {
            let start = (item.partNumber - 1) * ts.chunkSize
            let end = Math.min(ts.fileSize, start + ts.chunkSize)
            let _chunkFile = file.slice(start, end)
            if (!this.flag) {
                return
            }
            await $.ajax({
                url: item.uploadUrl,
                type: 'PUT',
                contentType: false,
                processData: false,
                data: _chunkFile,
                success: function(res) {
                    ts.start++
                }
            })
        }
        ts.composeFile(fileMd5, file.name, res.data.data.status)
    })
},
```
+ 利用后端返回的当前片号进行文件的二进制切割
+ 准备好数据请求minio的地址
+ 成功后完成片数+1
::: tip
这里采用了顺序上传到方式，为了加快速度可以将`13`和`28`行的同步去掉
:::

### 3.5 合并文件
``` js
composeFile(fileMd5, fileName, status) {
    const composeParams = Object.assign(this.params, { 
        fileMd5: fileMd5, status: status, originalFilename: fileName, fileSize: this.fileSize
    })
    // 参数自定，没有唯一要求
    chunkUploaddEnd(composeParams).then(res => {
        console.log("合并文件完成", res.data)
        this.params = {}
    })
},
```
+ 向后端发出合并请求
+ 并且能够发送额外的参数
::: danger
合并接口可能因为后端合并时间过长，造成超时的问题
:::

### 3.6 进度显示
进度显示利用vue`computed`生命周期
``` js
computed: {
    // 计算MD5进度和上传进度
    speed() {
        if (this.start == 0 && this.fileName != "") {
            let num = (this.Md5Chunk / this.end * 100).toFixed(0)
            return "MD5:" + num + '%'
        }
        if (this.start != this.end && this.fileName != "") {
            let num = (this.start / this.end * 100).toFixed(0)
            return "上传:" + num + '%'
        }
        if (this.start == this.end) {
            return "完成"
        }
        return ""
    },
    // 计算进度条背景颜色
    speedBg() {
        let num = (this.Md5Chunk / this.end * 100).toFixed(0)
        if (this.Md5Chunk == this.end) {
            num = (this.start / this.end * 100).toFixed(0)
        }
        num = 100 - num
        return num + '%'
    }
},
```
完善下HTML和css如下
``` html
<template>
    <div v-show="fileName">
        <input ref="inputUpload" type="file" @change="uploadFile" id="upload" style="display:none">
        <div class="mt10" style="width:100%">
            <div style="display:flex;justify-content: space-between;">
                <p class="oto">
                    {{fileName}}
                </p>
                <span style="flex:0 0 80px;text-align: right;">
                    {{speed}}
                </span>
            </div>
            <div class="upload-speed" :style="'background-position-x: '+speedBg"></div>
        </div>
    </div>
</template>
```
``` css
.upload-speed {
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #409EFF, #409EFF 50%, #eee 50%, #eee 100%) no-repeat;
    border-radius: 2px;
    background-position-x: 100%;
    background-size: 200%;
}
```
## **4 完成**
整套分片上传就完成，利用minio有几个优缺点

+ 由于利用了minio直传分片，地址的生成全部交给后台，后续项目迁移调整不需要改前端
+ 状态为0时的秒传没法携带参数，原因是无法获取文件的地址，进行定位文件，也就没法与参数绑定
+ 后端合并超时影响前端接口相应，修改时常为下策

---

参考文章：
[基于vue-simple-uploader封装文件分片上传、秒传及断点续传的全局上传插件](https://www.cnblogs.com/xiahj/p/vue-simple-uploader.html)
[vue-simple-uploader](https://github.com/simple-uploader/vue-uploader/blob/master/README_zh-CN.md)
[simple-uploader.js](https://github.com/simple-uploader/Uploader/blob/develop/README_zh-CN.md)
[Vue.Js（html5） + Java实现文件分片上传 ](https://www.cnblogs.com/life-of-coding/p/13072245.html)
[WebUploader 实现大文件的断点续传功能](https://blog.csdn.net/weixin_38319645/article/details/83591524)
















***

``` js
async uploadFile() {
    let ts = this
    const file = document.getElementById("upload").files[0];
    ts.fileName = file.name
    ts.fileSize = file.size
    if (ts.fileSize <= ts.chunkSize) {
        console.log("上传的文件大于5m才能分片上传")
    }
    const chunkCount = Math.ceil(ts.fileSize / ts.chunkSize)
    ts.end = chunkCount
    const fileMd5 = await ts.getFileMd5(file, chunkCount);
    const initUploadParams = { chunkCount: chunkCount, fileMd5: fileMd5 }
    chunkUpload(initUploadParams).then(async (res) => {
        if (res.data.data.status === 200 || res.data.data.status === 0) {
            ts.composeFile(fileMd5, file.name, res.data.data.status)
            ts.start = ts.end
            return;
        }
        const chunkUploadUrls = res.data.data.chunkUploadUrls
        ts.start = ts.end - chunkUploadUrls.length
        for (const item of chunkUploadUrls) {
            let start = (item.partNumber - 1) * ts.chunkSize
            let end = Math.min(ts.fileSize, start + ts.chunkSize)
            let _chunkFile = file.slice(start, end)
            if (!this.flag) {
                return
            }
            await $.ajax({
                url: item.uploadUrl,
                type: 'PUT',
                contentType: false,
                processData: false,
                data: _chunkFile,
                success: function(res) {
                    ts.start++
                }
            })
        }
        ts.composeFile(fileMd5, file.name, res.data.data.status)
    })
},
```