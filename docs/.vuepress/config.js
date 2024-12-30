import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { hopeTheme } from 'vuepress-theme-hope';
import { sidebar } from './sidebarConfig';


const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'ko-KR',

  title: 'M1nu0x0',
  // description: '삐약이 개발자의 기록',

  theme: hopeTheme({
    plugins: {
      blog: true,
    },
    blog: {
      name: 'M1nu0x0',
      description: '삐약이 개발자의 블로그',
      star: true,
      medias: {
        GitHub: "https://github.com/M1nu0x0",
        Gmail: "mailto:minwoo.sejong@gmail.com",
      },
      sidebarDisplay: 'mobile',
    },
    
    displayFooter: true,
    footer: '© 2024. ~ M1nu0x0',
    logo: '/images/profile.png',
    
    markdown: {
      components: true,
      math: {
        type: 'katex',
      },
      lineNumbers: true,
    },
    
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Repos', link: '/Repos' },
      { text: 'About', link: '/About' },
    ],
    sidebar,
    sidebarDepth: 1,
    sidebarAutoCollapse: true,

    darkMode: 'toggle',
    backToTop: true,
    removeHtmlExtension: true,
  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    [
      'sitemap',
      {
        hostname: 'https://m1nu0x0.github.io',
        exclude: ['/404.html'],
      },
    ],
  ],

  bundler: viteBundler(),
})
