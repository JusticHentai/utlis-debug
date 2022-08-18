import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import testConfigParsing from './src/components/config-parsing/config-paring'

testConfigParsing()

export default defineConfig({
  plugins: [vue()],
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
