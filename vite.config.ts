import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // 函数自动引入 https://github.com/antfu/unplugin-auto-import
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        { '~/api': [['*', 'api']] },
      ],
      dirs: [
        './src/composables',
        './src/service',
      ],
      vueTemplate: true,
      dts: './src/types/auto-import.d.ts',
    }),

    // 组件自动引入 https://github.com/antfu/vite-plugin-components
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      dirs: ['./src/components/**'],
      dts: './src/types/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    UnoCSS(),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  base: './',
})
