--- 
title: vuepres插件
date: 2021-06-02 14:17:19
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - vuepress
 - reco主题
 - reco插件
publish: true
autoGroup-2: 主题应用
autoPrev: reco_theme
---

## **1. 推荐插件**
vuepress-reco支持许多实用的第三方插件

目前本博客的插件使用了四款

版本如下：
``` json
"devDependencies": {
    "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.3",
    "@vuepress-reco/vuepress-plugin-kan-ban-niang": "^1.0.5",
    "vuepress-plugin-auto-sidebar": "^2.2.3",
    "vuepress-plugin-dynamic-title": "^1.0.0",
    "vuepress-plugin-reading-progress": "^1.0.10",
    "vuepress-plugin-sakura": "^1.1.0",
    "vuepress-plugin-social-share": "^1.0.0",
    "vuepress-theme-reco": "^1.6.6"
},
```
可以直接复制至`package.json`后重新拉取依赖`cnpm i`

插件安装之后只需要在`config.js`主题中配置引入即可

除生成导航插件可以markdown文件中配置头文件以外，其他使用都极为简单

### **1.1 自动生成导航**
插件[官方文档](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/)
生成测导航、文件分组
``` json
["vuepress-plugin-auto-sidebar", {}],
```
引入即可，采用默认配置，有额外需求参考文档

### **1.2 音乐插件**
插件[官方文档](https://github.com/vuepress-reco/vuepress-plugin-bgm-player)
音乐播放插件
``` json
["@vuepress-reco/vuepress-plugin-bgm-player", {
    audios: [
        // 网络文件示例
        {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
    ]
}],
```

### **1.3 看板娘**
插件[官方文档](https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang)
添加博客看板娘，多个模型可以选择
``` json
["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
    theme: ["blackCat"],
    clean: false,
    messages: {
        welcome: '我是XXX欢迎你的关注 ',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦'
    }
}],
```

### **1.4 樱花装饰**
插件[官方文档](https://github.com/JabinPeng/vuepress-plugin-sakura)
网页樱花飘落
``` json
["sakura", { //页面樱花插件
    num: 30, // 默认数量
    show: true,
    zIndex: -1,
    img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
    }
}],
```

### **1.5 动态标题**
插件[官方文档](https://github.com/moefyit/vuepress-plugin-dynamic-title)
离开当前页面网页标题更换
``` json
["dynamic-title",
    {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
    }
]
```