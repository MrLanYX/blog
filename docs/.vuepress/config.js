const nav = require('./nav.js')
const friendLink = require('./friendLink.js')
const plugins = require('./plugins.js')


module.exports = {
    base: '/blog/',
    title: '摸鱼的后花园',
    // description: '悠闲惬意(ฅ>ω<*ฅ)能不卷就不卷',
    description: '合抱之木，生于毫末；九层之台，起于累土.',
    dest: './dist',
    port: '9990',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/img/logo.svg' }],
        ['link', { rel: 'stylesheet', href: '/css/index.css' }],
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
        }],
        // 百度统计
        // ['script', {}, `
        //     var _hmt = _hmt || [];
        //     (function() {
        //         var hm = document.createElement("script");
        //         hm.src = "https://hm.baidu.com/hm.js?531dc9ded0def6bec59ad1df86812935";
        //         var s = document.getElementsByTagName("script")[0];
        //         s.parentNode.insertBefore(hm, s);
        //     })();
        // `],
        // 百度爬虫校验
        // ['meta', {
        //     "name": "baidu-site-verification",
        //     "content": "code-Ml8ZlsHW5O",
        // }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true
    },
    theme: 'reco',
    themeConfig: {
        type: 'blog', // 主题类型
        nav: nav, // 自定义顶部导航栏
        authorAvatar: '/img/head.jpg', // 首页头像文件
        author: 'Mr.Lan',
        startYear: '2021',
        subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        sidebarDepth: 1,
        sidebar: false,
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
        vssueConfig: {
            platform: 'github',
            owner: 'MrLanYX',
            repo: 'blog',
            clientId: '6429547637ee6c02e1f9',
            clientSecret: '953ea2c8999a6bf30688253c444204cad033723d',
        },
        friendLink: friendLink,
        lastUpdated: 'Last Updated',
        search: true,
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        // editLinks: false,
        // editLinkText: '在 GitHub 上编辑此页 ！',
    },
    plugins: plugins,
}