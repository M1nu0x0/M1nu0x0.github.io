import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { hopeTheme } from 'vuepress-theme-hope';

const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'ko-KR',

  title: 'M1nu0x0',
  description: 'My first VuePress Site',

  theme: hopeTheme({
    logo: '/images/profile.png',

    markdown: {
      components: true,
      math: {
        type: 'katex',
      }
    },
    
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Pages', link: '/pages/' },
      { text: 'About', link: '/about/' },
      { text: 'Github', link: 'http://github.com/M1nu0x0' },
    ],

    darkMode: false,
  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

  bundler: viteBundler(),
})
