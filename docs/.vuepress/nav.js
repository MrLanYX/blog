module.exports = [
    { text: '首页', link: '/', icon: 'reco-home' },
    {
        text: '知识点',
        icon: 'reco-document',
        link: '/know/',
        items: [
            { text: 'Vue', link: '/know/vue/vue_upload' },
            { text: 'JavaScript', link: '/know/js/js_bibao' },
            { text: 'CSS', link: '/know/css/css_flex' },
            { text: 'Linux', link: '/know/linux/command' },
            { text: 'git', link: '/know/git/' },
        ]
    },
    {
        text: '建站指南',
        icon: 'reco-gitlab',
        link: '/guide/',
        items: [
            { text: '博客', link: '/guide/blog/vuepress_start' },
            { text: '服务器', link: '/guide/server/server_0' },
        ]
    },
    {
        text: '旁门左道',
        icon: 'reco-other',
        link: '/other/',
        items: [
            { text: '浏览器扩展', link: '/other/webextend/' },
            { text: '收藏夹', link: '/other/favorites/asciiPainting' },
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
            { text: '微服务中心', link: 'https://server.weblyx.cn/' },
            { text: 'github', link: 'https://github.com/MrLanYX' }
        ]
    }
]