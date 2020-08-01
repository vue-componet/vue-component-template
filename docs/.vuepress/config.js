module.exports = {
  title: 'Vue-component-template',
  description: '如非软弱,怎会连触手可及的幸福也要放弃?--纵力量绵薄,也要筑起通往梦想的桥梁！',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vue-component-template/', // 这是部署到服务器的相关配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // displayAllHeaders: true,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      {
        text: '使用文档',
        link: '/guide/'
      }, // 内部链接
    ],
    sidebar: {
      '/guide/': [
        {
          title: '使用文档',
          collapsable: false,
          children: [
            '',
            'write-documentation',
          ]
        },
      ],
    }
  }
};