import { defineConfig } from 'umi';

export const projectDefaultConfig = {
  name: '/', // 项目名称，Build 打包路径
  port: 8081,
  host: 'localhost',
  devProxy: {
    // 设置项目接口 proxy，可以设置多个
    '/console-rest': {
      changeOrigin: true,
      pathRewrite: { '^/console-rest': '' },
      target: '',
    },
  },
};

// 项目 Antd Theme 基础配置
export const projectThemeConfig = {
  antd: {
    'primary-color': '#f85415',
  },
};

export default defineConfig({
  hash: true,
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  locale: {},
  theme: projectThemeConfig.antd,
  devServer: { host: projectDefaultConfig.host },
  proxy: projectDefaultConfig.devProxy,
  outputPath: `output${projectDefaultConfig.name}`,
  publicPath: `${projectDefaultConfig.name}/`,
  favicon: `${projectDefaultConfig.name}/favicon.ico`,
  base: `${projectDefaultConfig.name}/`,
  define: {
    'process.env.UMI_ENV': process.env.UMI_ENV,
  },
  qiankun: {
    slave: {},
  },
});
