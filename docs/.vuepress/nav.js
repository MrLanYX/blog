module.exports = [{
        text: '服务中心',
        icon: 'reco-home',
        link: 'https://server.weblyx.cn/'
    },
    {
        text: '知识分类',
        icon: 'reco-document',
        link: '/know/',
        items: [
            { text: 'Vue', link: '/know/vue/' },
            { text: 'React', link: '/know/react/' },
            { text: 'Linux', link: '/know/linux/' },
            { text: 'GIS', link: '/know/GIS/' },
            { text: 'git', link: '/know/git/' },
        ]
    },
    { 
        text: '建站指南',
        icon: 'reco-gitlab',
        link: '/guide/',
        items: [
            { text: '服务器', link: '/guide/server/' },
            { text: '博客', link: '/guide/blog/' },
        ]
    },
    {
        text: '旁门左道',
        icon: 'reco-other',
        link: '/other/',
        items: [
            { text: '浏览器扩展', link: '/other/webextend/' },
            { text: '私人云盘', link: '/other/cloud/' },
            { text: '收藏夹', link: '/other/favorites/' },
        ]
    },
    {
        text: '时间线',
        icon: 'reco-date',
        link: '/timeline/',
    },
    {
        text: '关于我',
        icon: 'reco-account',
        link: '/about/',
        items: [
            { text: '关于我', link: '/about/me/' },
            { text: '简历', link: '/about/resume/' },
            { text: 'github', link: 'https://github.com/shyerLan' },
        ]
    }
]