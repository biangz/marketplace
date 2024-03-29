import { defineConfig, loadEnv } from 'vite'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import React from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) =>  {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      UnoCSS({
        presets: [
          presetWebFonts({
            provider: 'google',
            fonts: {
                mono: ['Titillium Web:200,300,400,600,700,900'],
            },        
          }),
          presetUno(),
          presetAttributify(),
          presetIcons(),
        ]
      }),
      React(),
    ],
    server: {
      open: true,
      host: '0.0.0.0',
      proxy: {
        '/localapi': {
            target:env.VITE_PROXY_BASE_URL,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/localapi/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve('./src') // @代替src
      }
    },
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "./src/common/css/global.less";',
      }
    },
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV,
    }
  }
})
