import BlogTheme from '@sugarat/theme'
// 自定义样式重载
// import './style.scss'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
    ...BlogTheme,
    // ctx: any
    // enhanceApp({ app, router, siteData }) {},
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
    },
}
