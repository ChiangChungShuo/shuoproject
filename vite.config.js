import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shuoproject/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', // 注册更新模式方式  默认是autoUpdate，将会自动更新，其他还有prompt和skipWaiting
      injectRegister: 'auto', // 控制如何在应用程序中注册ServiceWorker 默认值是 'auto' ，其他如：'inline' 则是注入一个简单的注册脚本，内联在应用程序入口点中
      manifest: { // manifest.json 文件配置
        name: 'qborfy study website',
        short_name: 'qborfyStudy',
        description: 'qborfy study website',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
