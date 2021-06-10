const nav = require('./nav.js')
const friendLink = require('./friendLink.js')
const plugins = require('./plugins.js')


module.exports = {
    title: '摸鱼の后花园',
    description: '一个小小的前端，拥有着大大的梦想~',
    dest: './dist',
    port: '9990',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
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
        ['script',{},`
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?531dc9ded0def6bec59ad1df86812935";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        `],
        // 百度爬虫校验
        ['meta',{
            "name":"baidu-site-verification",
            "content":"code-Ml8ZlsHW5O",
        }]
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