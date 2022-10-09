
import svgModule from "./lib/module";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tourismPage',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://kit.fontawesome.com/[user].js', async: true, crossorigin: 'anonymous'},
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    svgModule,
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://localhost:4000/activite',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {

      config.node = {
           fs: 'empty'
       }
      }
  },
  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
   }
}
