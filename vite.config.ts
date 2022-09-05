import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import pxtorem from 'postcss-pxtorem'
// import testConfigParsing from './src/components/config-parsing/config-paring'

// testConfigParsing()

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // 设置全局 scss 样式
        additionalData: `@import "@/global.scss";`,
      },
    },
    postcss: {
      // postcss 配置
      plugins: [
        pxtorem({
          rootValue: 100, // 换算基数
          propList: ['*'],
          exclude: /(node_module)/,
          selectorBlackList: ['html'], // 主要用于保留 html 内定义的 rem 基准的 fontSize 值
          mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
          minPixelValue: 2, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
        }),
      ],
    },
  },
  resolve: {
    alias: {
      // 配置快速引用路径
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    port: 8081, // 端口为 8081
  },
})
