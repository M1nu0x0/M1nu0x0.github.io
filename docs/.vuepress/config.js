import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { hopeTheme } from 'vuepress-theme-hope';


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
      }
    },
    
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Repos', link: '/Repos' },
      { text: 'About', link: '/About' },
    ],

    sidebarDepth: 1,
    darkMode: 'toggle',
    backToTop: true,
  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

  cleanUrls: true,

  bundler: viteBundler(),
})
