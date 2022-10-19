
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
      { name: 'Loisira', content: 'une agence de loisirs et touristique proposant des activités dans le monde entier, à des prix imbattables' },
      { name: 'Activité', content: 'activités  vous laissez rechercher des activites dans la ville ou le pays de votre choix' },
      { hid: 'description', name: 'description', content: 'une agence de loisirs et touristique proposant des activités dans le monde entier, à des prix imbattables' },
      { name: 'format-detection', content: 'telephone=no' }
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
    '@nuxtjs/axios',
  ],
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
  build: {
    
  },
  
}
