--- 
title: 创建个人博客总结
date: 2021-06-02 15:54:29
author: 'Mr.Lan'
sidebar: 'auto'
categories: 
 - 前端
tags: 
 - vue
 - vuepress
 - blog
publish: true
autoGroup-3: 总结
#autoPrev: 
---

## 总结
现在总结下博客创建的总体路程，不采用学习的方式而是一步到位

如有什么疑问可以提问询问

+ 依赖准备
    - 创建文件夹
    - 初始化项目生成`package.json`文件
    - 安装vuepress
    - 安装主题vuepress
    - 安装需要的第三方插件
+ 目录文件创建
    - 准备`.vuepress`文件夹
    - 准备静态资源文件夹`.vuepress/pulic/img`、`.vuepress/js`、`.vuepress/css`
    - 准备配置文件`.vuepress/config.js`
    - 准备配置文件的子类，方便管理
        - `.vuepress/friendLink.js`：友情链接
        - `.vuepress/nav.js`：顶部导航栏配置
        ``` js
        module.exports = [{
                text: '微服务中心',
                icon: 'reco-home',
                link: 'https://server.weblyx.cn/'
            },
            {
                text: '知识分类',
                icon: 'reco-document',
                link: '/know/',
                items: [
                    { text: 'Vue', link: '/know/vue/' },
                ]
            },
            {
                text: '时间线',
                icon: 'reco-date',
                link: '/timeline/',
            },
        ]
        ```
        - `.vuepress/plugins.js`：插件配置
        - `config.js`文件最终配置
        ``` js
        const nav = require('./nav.js')
        const friendLink = require('./friendLink.js')
        const plugins = require('./plugins.js')


        module.exports = {
            title: '',
            description: '',
            dest: './dist',
            port: '8080',
            head: [
                ['link', { rel: 'icon', href: '/img/logo.ico' }],
            ],
            markdown: {
                lineNumbers: true
            },
            theme: 'reco',
            themeConfig: {
                type: 'blog', // 主题类型
                nav: nav, // 自定义顶部导航栏
                authorAvatar: 'img/head.png', // 首页头像文件
                blogConfig: { // 插入的顶部导航栏
                    category: {
                        location: 2, // 在导航栏菜单中所占的位置，默认2
                        text: '分类' // 默认文案 “分类”
                    },
                    tag: {
                        location: 3, // 在导航栏菜单中所占的位置，默认3
                        text: '标签' // 默认文案 “标签”
                    }
                },
                // valineConfig: {
                //     appId: '...', // your appId
                //     appKey: '...', // your appKey
                // },
                // vssueConfig: {
                //     platform: 'github',
                //     owner: 'OWNER_OF_REPO',
                //     repo: 'NAME_OF_REPO',
                //     clientId: 'YOUR_CLIENT_ID',
                //     clientSecret: 'YOUR_CLIENT_SECRET',
                // },
                friendLink: friendLink,
                lastUpdated: 'Last Updated',
                searchMaxSuggestoins: 10,
                serviceWorker: {
                    updatePopup: {
                        message: "有新的内容.",
                        buttonText: '更新'
                    }
                },
                editLinks: true,
                editLinkText: '在 GitHub 上编辑此页 ！',
            },
            plugins: plugins,
        }
        ```
    - 准备`docs`文件夹下的子文件夹，用于存储博客文章
    - 切记创建README.md文件用于识别
+ markdown配置
    - 首页md文件配置
        ``` yaml
        ---
        home: true
        bgImage: '/img/bg.jpg'
        bgImageStyle: {
        height: '800px'
        }
        ---
        ```
    - 文件内参考[文件内配置](./vuepress_readme.md)
+ 插件引用至`.vuepress/plugins.js`文件

就此博客应该能够完成运作起来