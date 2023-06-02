import { getThemeConfig, defineConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
    home: {
        // 设置首页的 banner 信息
        name: "Valinaa Chan's Lovely Blogs",
        motto: '简约风的 Vitepress 博客主题',
        inspiring: '基于 Vitepress 定制的主题🎨',
        // 设置首页列表每页展示数量
        pageSize: 6,
    },
    hotArticle: {
        title: '🔥 精选文章',
        nextText: '换一组',
        pageSize: 5,
        empty: '暂无精选内容',
    },
    recommend: {
        title: '🔍 推荐文章',
        nextText: '换一组',
        pageSize: 5,
        empty: '暂无推荐文章',
        showSelf: true,
    },
    author: 'Valinaa Chan',
    // 友链
    friend: [
        {
            nickname: 'Valinaa',
            des: 'Get Less But Still Do MORE!',
            avatar: '/avatar.jpg',
            url: 'https://www.valinaa-wei.tech',
        },
        {
            nickname: '粥里有勺糖',
            des: '你的指尖用于改变世界的力量',
            avatar: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
            url: 'https://sugarat.top',
        },
        {
            nickname: 'Vitepress',
            des: 'Vite & Vue Powered Static Site Generator',
            avatar: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656',
            url: 'https://vitepress.vuejs.org/',
        },
    ],
    // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
    search: 'pagefind',
    popover: {
        title: '公告',
        body: [
            {
                type: 'text',
                content: 'QQ交流群: 681489336 🎉🎉',
            },
            { type: 'text', content: '👇公众号👇---👇 微信 👇' },
            {
                type: 'image',
                src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210',
            },
            {
                type: 'text',
                content: '欢迎大家加群&私信交流',
            },
            {
                type: 'button',
                content: '博客',
                link: 'https://sugarat.top',
            },
        ],
        duration: 0,
    },
})

export default defineConfig({
    extends: blogTheme,
    markdown: {
        lineNumbers: false,
    },
    lang: 'zh-cn',
    title: "Valinaa Chan's Lovely Blogs",
    description: 'A blog theme site based on vitepress',
    vite: {
        server: {
            fs: {
                strict: false,
            },
        },
        optimizeDeps: {
            include: ['element-plus'],
            exclude: ['@sugarat/theme'],
        },
    },
    lastUpdated: true,
    themeConfig: {
        lastUpdatedText: '上次更新于',
        footer: {
            message:
                '&copy; 2023 <a target="_blank" href="https://www.valinaa-wei.tech/"> www.valinaa-wei.tech </a> All rights reserved.',
            copyright:
                'MIT Licensed | <a target="_blank" href="https://intro.valinaa-wei.tech/"> Valinaa Chan </a>',
        },
        logo: '/avatar.jpg',
        // editLink: {
        //   pattern:
        //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
        //   text: '去 GitHub 上编辑内容'
        // },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/Valinaa/Website',
            },
        ],
    },
})
