export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Курсы от дополнительного образования',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/yandex-metrika',
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'G-7YF5CJ7SM0',
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      // linker: {
      //   domains: ['domain.com','domain.org']
      // }
    },
    // debug: true, // enable to track in dev mode
    // disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    // additionalAccounts: [{
    //   id: 'AW-XXXX-XX', // required if you are adding additional accounts
    //   config: {
    //     send_page_view: false // optional configurations
    //   }
    // }]
  },
  yandexMetrika: {
    id: '69449760',
    webvisor: true,
    clickmap:true,
    useCDN:false,
    trackLinks:true,
    accurateTrackBounce:true,
  },
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  // generate: {
  //   dir: 'docs',
  //   subFolders: false
  // },
  // router: {
  //   base: '/landing/'
  // },
  
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
