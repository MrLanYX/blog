module.exports = [{
        text: '个人首页',
        link: 'https://blog.csdn.net/'
    },
    {
        text: '知识分类',
        link: '/know/',
        items: [
            { text: 'Vue', link: '/know/vue/' },
            { text: 'React', link: '/know/react/' },
        ]
    },
    {
        text: '建站指南',
        link: '/guide/',
        items: [
            { text: '服务器', link: '/guide/server/' },
            { text: '博客', link: '/guide/blog/' },
            { text: '微服务', link: '/guide/microservice/' },
        ]
    },
    {
        text: '拓展技能',
        link: '/other/',
        items: [{
                text: '工具箱',
                items: [
                    { text: '浏览器扩展', link: '/other/webextend/' },
                    { text: '云盘', link: '/other/cloud/' },
                    { text: '下载服务', link: '/other/download/' },
                ]
            },
            {
                text: '旁门左道',
                items: [
                    { text: '收藏夹', link: '/other/favorites/' },
                ]
            },
        ]
    },
    {
        text: '时间线',
        link: '/timeline/',
    },
    {
        text: '关于我',
        link: '/about/',
        items: [
            { text: '关于我', link: '/about/me/' },
            { text: '简历', link: '/about/resume/' },
            { text: 'github', link: 'https://github.com/shyerLan' },
        ]
    }
]