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
        // autoplay:true,
        audios: [
            {
                name:'玫瑰少年（小提琴版）',
                artist: 'Strictlyviolin荀博/王朝',
                url:'https://m804.music.126.net/20220511152652/61f179ad242fa15fc3b19078f83d66ee/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14162454760/9c65/f746/e448/74ac330cd0d3aa0a45971a99da3b7372.m4a',
                cover: 'http://p2.music.126.net/YT6IU71FJRs0uzgUZABexQ==/109951167355147080.jpg?param=130y130'
            }
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