import { defineConfig } from 'umi';
const { resolve } = require('path');
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  alias: {
    common: resolve(__dirname, './src/common'),
    components: resolve(__dirname, './src/components'),
    utils: resolve(__dirname, './src/utils'),
  },
  fastRefresh: {},
});
