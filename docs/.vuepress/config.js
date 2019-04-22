module.exports = {
    dest:'dist',
    base: '/blog/', // 这是部署到github相关的配置
    title: 'JamesZ Blog',
    description: 'This is JamesZ Blog.',
    head: [
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    activeHeaderLinks: true,
    repo: 'vuepress-blog',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/archive/' },
        ],
        sidebar: {
            '/archive/': genSidebarConfig('123',['','one','two'])
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        serviceWorker: {
            // 如果设置为 true, 默认的文本配置将是:
            updatePopup: {
               message: "有新的内容科获取",
               buttonText: "刷新"
            }
        }
    }
}

function genSidebarConfig(title,children) {
    return [{
        title,
        collapsable: false,
        children: children
    }]
}