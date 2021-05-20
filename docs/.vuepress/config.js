module.exports = {
    title: 'Shyer',
    description: '迎着风的轨迹，追寻太阳的光芒~',
    dest: './dist',
    port: '9990',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }],
        // 引入jquery
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }],
        // 引入鼠标点击脚本
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/MouseClickEffect.js"
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    theme: 'reco',
    themeConfig: {
        type: 'blog', // 主题类型
        nav: require('./nav.js'), // 自定义顶部导航栏
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
        friendLink: [{
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
        ],
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
    plugins: [ // 插件配置
        ["vuepress-plugin-auto-sidebar", {}],
        ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
            theme: ["blackCat"],
            clean: false,
            messages: {
                welcome: '我是lookroot欢迎你的关注 ',
                home: '心里的花，我想要带你回家。',
                theme: '好吧，希望你能喜欢我的其他小伙伴。',
                close: '再见哦'
            }
        }],
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
        ["sakura", { //页面樱花插件
            num: 30, // 默认数量
            show: true,
            zIndex: -1,
            img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
            }
        }]
    ]
}