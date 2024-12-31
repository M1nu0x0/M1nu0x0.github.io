import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite';

import { plugins } from './plugins.js';
import theme from './theme.js';


export default defineUserConfig({
  lang: 'ko-KR',

  title: 'M1nu0x0',
  // description: '삐약이 개발자의 기록',

  theme,
  plugins,
  bundler: viteBundler(),
});
