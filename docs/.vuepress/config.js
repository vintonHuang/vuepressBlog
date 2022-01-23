/*
 * @Author: Vinton
 * @Date: 2021-11-17 16:01:45
 * @LastEditors: Vinton
 * @LastEditTime: 2021-11-17 18:06:52
 * @Description: file content
 */
const path = require('path')
module.exports = {
    title: 'Hello VuePress',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    port:9999,
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        locales: {
            '/': {
                label: '中文',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                navbar: false,
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/' },
                    { text: 'External', link: 'https://google.com' }
                ], 
                sidebar: [
                        {
                          title: 'Group 1',   // 必要的
                          path: '/foo/one/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                          collapsable: false, // 可选的, 默认值是 true,
                          sidebarDepth: 1,    // 可选的, 默认值是 1
                          children: [
                            '/'
                          ]
                        },
                        {
                            title: 'Group 2',
                            children: [ '/' ],
                            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                        }
                      ]
            },
            '/zh': {
                label: '中文',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                navbar: false,
                nav: [
                    { text: 'Home', link: '/zh/' },
                    { text: 'Guide', link: '/zh/guide/' },
                    { text: 'External', link: 'https://google.com' }
                ],
            }
        }

    }
}