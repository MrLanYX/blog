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
        text: '专题指南',
        icon: 'reco-gitlab',
        link: '/guide/',
        items: [
            { text: '搭建博客', link: '/guide/blog/vuepress_start' },
            { text: '搭建服务器', link: '/guide/server/server_0' },
            // { text: '前端项目转客户端', link: '/guide/vue_pc/electron_vue_1' },
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
            { text: '数字功能区小键盘', link: '/other/toy/keyboard' },
            { text: 'windows人脸识别', link: '/other/toy/winhello' },
            { text: 'SlimeVR全身追踪模块', link: '/other/toy/SlimeVR_MPU-6050' },
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
            { text: '关于我', link: '/about/aboutMe' },
            { text: '简历', link: '/about/resuMe' },
            { text: 'JS版俄罗斯方块', link: 'https://mrlanyx.github.io/Tetris' },
            { text: 'github', link: 'https://github.com/MrLanYX' }
        ]
    }
]