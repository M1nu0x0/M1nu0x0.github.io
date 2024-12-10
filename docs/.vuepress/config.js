import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'ko-KR',

  title: 'M1nu0x0',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: './images/profile.png',

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Pages', link: '/pages/' },
      { text: 'About', link: '/about/' },
      { text: 'Github', link: 'https://github.com/M1nu0x0' },
    ],

    darkMode: false,
  }),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

  // alias: {
  //   '@theme/ReposTable': path.resolve(__dirname, './components/ReposTable.vue'),
  // },

  bundler: viteBundler(),
})
