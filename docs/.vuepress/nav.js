module.exports = [
    { text: '首页', link: '/', icon: 'reco-home' },
    {
        text: '知识点',
        icon: 'reco-document',
        link: '/know/',
        items: [
            { text: 'JavaScript', link: '/know/js/js_bibao' },
            { text: 'CSS', link: '/know/css/css_flex' },
            { text: 'nodejs', link: '/know/nodejs/nodejs_01' },
            { text: 'Vue', link: '/know/vue/vue_upload' },
            { text: 'Vuex', link: '/know/Vuex/vue_vuex1' },
            { text: 'Linux', link: '/know/linux/command' },
            { text: 'git', link: '/know/git/cmd' },
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
            { text: '网页收藏夹', link: '/other/favorites/asciiPainting' },
            { text: '斐讯N1盒子', link: '/other/toy/N1' },
            { text: 'ESP32-CAM', link: '/other/toy/esp32cam' },
            { text: '移动电视盒cm211-1', link: '/other/toy/cm211' },
            { text: 'windows人脸识别', link: '/other/toy/winhello' },
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
            // { text: '微服务中心', link: 'https://server.weblyx.cn/' },
            { text: 'github', link: 'https://github.com/MrLanYX' }
        ]
    }
]