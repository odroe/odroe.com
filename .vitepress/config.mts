import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Odroe',
  titleTemplate: true,
  description: '即使坠入深渊，也可重见天日。',
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/odroe/odroe.com' },
    ],

    footer: {
      message:
        '<a href="https://beian.miit.gov.cn">蜀ICP备2021021384号-2</a> · 川公网安备51019002004080号',
    },
  },
});
