import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  plugins: [{
    src: '~/plugins/ElementUI', ssr: false
  }],
  css: ['element-ui/lib/theme-chalk/index.css'],

  vendor: ['element-ui']
}

export default config
