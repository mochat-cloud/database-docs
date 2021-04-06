module.exports = {
    title: 'MoChat',
    base: '/database/',
    description: '让企业微信开发更简单',
    themeConfig: {
        nav: [
            { text: 'Github', link: 'https://github.com/mochat-cloud/mochat' },
            { text: '应用开发', link: 'https://mochat.wiki/app-dev/example' },
            { text: '数据库字典', link: 'https://mochat.wiki/database/md/tables.html' },
            { text: 'API文档', link: 'https://mochat.wiki/api/' },
        ],
        sidebar: [
            {
                title: '数据库字典',
                path: '/md/tables',
                collapsable: false,
                sidebarDepth: 3,
                children: [
                    '/md/tables',
                    // '/md/user',
                    // '/md/rbac',
                    // '/md/corp',
                    // '/md/employee',
                ]
            },
            // {
            //     title: '引流获取',
            //     path: '/md/channel-code',
            //     collapsable: false,
            //     sidebarDepth: 3,
            //     children: [
            //         '/md/channel-code',
            //     ]
            // },
            // {
            //     title: '客户转化',
            //     path: '/md/greeting',
            //     collapsable: false,
            //     sidebarDepth: 3,
            //     children: [
            //         '/md/greeting',
            //         '/md/medium',
            //     ]
            // },
            // {
            //     title: '客户管理',
            //     path: '/md/contact',
            //     collapsable: false,
            //     sidebarDepth: 4,
            //     children: [
            //         '/md/contact',
            //         '/md/contact-field',
            //         '/md/contact-tag',
            //     ]
            // },
            // {
            //     title: '客户群运营',
            //     path: '/md/room',
            //     collapsable: false,
            //     sidebarDepth: 3,
            //     children: [
            //         '/md/room',
            //         '/md/auto-pull',
            //     ]
            // },
            // {
            //     title: '聊天侧边栏',
            //     path: '/md/sidebar',
            //     collapsable: false,
            //     sidebarDepth: 3,
            //     children: [
            //         '/md/sidebar',
            //     ]
            // },
            // {
            //     title: '企业风控',
            //     path: '/md/message',
            //     collapsable: false,
            //     sidebarDepth: 3,
            //     children: [
            //         '/md/message',
            //         '/md/sensitive',
            //     ]
            // },
            // {
            //     title: '系统其他',
            //     path: '/md/other',
            //     collapsable: false,
            //     sidebarDepth: 3,
            //     children: [
            //         '/md/log',
            //         '/md/other',
            //     ]
            // },

        ]
    },
    markdown: {
        toc: {includeLevel: [1, 2, 3]}
    },
}