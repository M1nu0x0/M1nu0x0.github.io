import { defineClientConfig } from '@vuepress/client';
import ReposTable from './components/ReposTable.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('ReposTable', ReposTable);
  },
});
