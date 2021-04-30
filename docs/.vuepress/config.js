module.exports = {
    title: 'Shyer',
    description: '迎着风的轨迹，追寻太阳的光芒~',
    dest: './dist',
    port: '9990',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}