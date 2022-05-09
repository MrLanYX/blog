module.exports = [ // 插件配置
    ["vuepress-plugin-auto-sidebar", {
        sort: {
            mode: "desc"
        }
    }],
    ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
        theme: ["blackCat"],
        clean: false,
        messages: {
            welcome: '我是Mr.Lan欢迎你的关注 ',
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
    }],
    ["dynamic-title",
        {
            // showIcon: "/blog/img/logo.ico",
            showText: "(/≧▽≦/)咦！又好了！",
            // hideIcon: "/blog/img/logo.ico",
            hideText: "(●—●)喔哟，崩溃啦！",
            recoverTime: 2000
        }
    ],
    ["permalink-pinyin", {
        lowercase: true, // Converted into lowercase, default: true
        separator: '_' // Separator of the slug, default: '-'
    }]
]