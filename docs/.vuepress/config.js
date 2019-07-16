module.exports = {
  title: "vuepress-theme-emjio",
  description: '我的博客',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // type:'blog',  风格可选bolg
  
  theme: 'emjio',
  themeConfig: {
    huawei: '华为，就是可以为所欲为！',
    // 华为文案,不需要写false
    themelink:false,
    // 是否在底部保留一个主题的链接
    nav: [
      { text: 'Home', link: '/', icon: 'em-home' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'em-date' },
      { text: 'api', link: '/api/', icon: 'em-api' },
      { text: 'Contact', 
        icon: 'em-message',
        items: [
          { text: 'NPM', link: 'https://www.npmjs.com/package/vuepress-theme-emjio', icon: 'em-npm' },
          { text: 'GitHub', link: 'https://github.com/emjio/vuepress-theme-emjio', icon: 'em-github' },
          { text: 'MsgGroup', link: 'https://jq.qq.com/?_wv=1027&k=5RRZZFb', icon: 'em-qq' },
          { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/kxVPH6dLSFVD7A0NQCcvrg', icon: 'em-wechat' },
        ]
      } 
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'xiaobai',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
    valineConfig: {
      appId: 'xxx',// your appId
      appKey: 'xxx', // your appKey
      placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
      notify:true
    }
     */

  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  