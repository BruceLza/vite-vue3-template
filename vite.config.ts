import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果提示path 模块找不到 安装 @types/node
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 @ 指向 src 目录
    },
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 设置代理，根据项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.com:8080',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
})
