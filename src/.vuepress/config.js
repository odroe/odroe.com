module.exports = {
    base: '/',
    title: 'Byte Gem',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', href: '/logo.svg' }],
    ],
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            {
                text: '生态产品',
                items: [
                    {
                        text: 'Fans',
                        items: [
                            { text: '产品主页', link: '/products/fans/' },
                        ]
                    },
                    {
                        text: 'SNS Max',
                        items: [
                            { text: '产品主页', link: 'https://web.snsmax.bytegem.net/' },
                            { text: '接口文档', link: 'https://snsmax.bytegem.net/docs/api/' },
                        ]
                    }
                ],
            },
            {
                text: '公司团队',
                link: '/team/'
            },
            {
                text: '定制业务',
                link: '/products/'
            },
            {
                text: '博客',
                link: '/blog/'
            },
            {
                text: '支持我们',
                link: '/products/'
            }
        ],
    },
}