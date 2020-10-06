export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {
                src: 'https://polyfill.io/v3/polyfill.min.js?features=Intl%2Cblissfuljs%2Cdefault%2Ces2015%2Ces2016%2Ces2017%2Ces5%2Ces6%2Ces7%2CArray.prototype.forEach',
                body: true
            },
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#D22027'},
    /*
    ** Global CSS
    */
    css: [
        {src: '~assets/scss/app.scss', lang: 'scss'},
    ],

    styleResources: {
        scss: [
            'assets/scss/vars.scss',
            'assets/scss/mixins.scss'
        ]
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        "~/plugins/axios",
    ],

    axios: {
        // proxyHeaders: false,
        baseURL: "",
        browserBaseURL: "",
    },

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/axios',
        // 'nuxt-svgicon'
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }



}
