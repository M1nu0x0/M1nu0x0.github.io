import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
import { getDirname, path } from '@vuepress/utils';

const __dirname = import.meta.dirname || getDirname(import.meta.url);

export const plugins = [
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, './components'),
  }),
  removeHtmlExtensionPlugin(),
];
