import { getThemeConfig, defineConfig } from '@sugarat/theme/node'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const blogTheme = getThemeConfig({
    // 主页配置
    home: {
        // 设置首页的 banner 信息
        name: "Valinaa Chan's Lovely Blogs",
        motto: '简约风的小博客',
        inspiring: '在这里去探索更多知识！',
        // 设置首页列表每页展示数量
        pageSize: 5,
    },
    // 精选文章
    hotArticle: {
        title: '🔥 精选文章',
        nextText: '换一组',
        pageSize: 5,
        empty: '暂无精选内容',
    },
    // 推荐文章
    recommend: {
        title: '🔍 相关文章',
        nextText: '换一组',
        pageSize: 5,
        empty: '暂无相关文章',
        showSelf: true,
    },
    author: 'Valinaa Chan',
    // 评论
    comment: {
        repo: 'Valinaa/blog-compiled',
        repoId: 'R_kgDOJpoDRA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJpoDRM4CW62a',
        inputPosition: 'top',
        lang: 'zh-CN',
        loading: 'lazy',
    },
    // 友链
    friend: [
        {
            nickname: 'Valinaa',
            des: 'Get Less But Still Do MORE!',
            avatar: '/avatar.jpg',
            url: 'https://www.valinaa-wei.tech',
        },
    ],
    // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
    search: 'pagefind',
    // 公告栏
    popover: {
        title: '欢迎来到Valinaa的博客 !',
        body: [
            {
                type: 'title',
                content: '想要了解更多？',
                style: 'font-size: larger',
            },
            { type: 'text', content: '👇 点击这里, 去看看源码 👇' },
            {
                type: 'button',
                content: '博客网页',
                link: 'https://github.com/Valinaa/Site-Blog',
                props: { type: 'warning' },
            },
            {
                type: 'button',
                content: '所有网页',
                link: 'https://github.com/Valinaa/Website',
                props: { type: 'info' },
            },
            { type: 'text', content: '👇点击一下，前往其他网页哦👇' },
            {
                type: 'button',
                content: '网站主页',
                link: 'https://www.valinaa-wei.tech',
                props: { type: 'success' },
            },
            {
                type: 'button',
                content: '关于作者',
                link: 'https://intro.valinaa-wei.tech',
            },
        ],
        duration: 0,
    },
})

export default defineConfig({
    extends: blogTheme,
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
        },
        lineNumbers: false,
    },
    lang: 'zh-cn',
    title: 'Find Your Favorite Blog',
    description: 'A blog site based on vitepress',
    vite: {
        server: {
            host: true,
            strictPort: true,
            cors: true,
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
        returnToTopLabel: 'To Top',
        darkModeSwitchLabel: 'Switch Theme',
        lastUpdatedText: '上次更新于',
        footer: {
            message:
                '&copy; 2023 <a target="_blank" href="https://www.valinaa-wei.tech/"> www.valinaa-wei.tech </a> All rights reserved.',
            copyright:
                'MIT Licensed | <a target="_blank" href="https://intro.valinaa-wei.tech/"> Valinaa Chan </a>',
        },
        logo: '/avatar.jpg',
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/Valinaa/Website',
            },
        ],
    },
})
