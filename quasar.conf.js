// Configuration for your app
var path = require('path')
var fs = require('fs')
// var utils = require('utils')

module.exports = function (ctx) {
	
	var plugins = []
	files = fs.readdirSync(path.join(__dirname, 'src', '/plugins/') )
	for(file in files){
		if(/.*\.js/.test(files[file]) && files[file].indexOf('ignore') < 0){
			plugins.push(files[file].slice(0,files[file].length-3))
		}
	}
  return {
		// app plugins (/src/plugins)
    // plugins: [
		// 	'i18n',
    //   'axios',
    //   'circular-json',
    //   'mapbox-gl',
    //   'mapbox-gl-vue',
    //   'vue-awesome',
    //   'vue-img-inputer',
    //   'vue-socket.io',
    //   'alopuselect',
    //   'vue-resource',
    //   'vue2-medium-editor',
    //   'vue-uuid',
    //   'globalCss',
    //   'vue-particles',
    //   'vuedraggable'
    //   'eventHub',
    // ],
		plugins,
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons'
      // 'ionicons',
      // 'mdi',
      // 'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      gzip: true,
      analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack (cfg) {
        // console.info(__dirname)
        cfg.resolve.alias['@'] = path.join(__dirname, 'src')
        cfg.module.rules.push(
          {
            test: /\.(cur|ani)$/,
            loader: 'file-loader',
            options: {
                name:  path.join(__dirname, 'src', 'statics/cursors/[name].[hash:7].[ext]'),
            }
          },
        )
        // fs.writeFile('debug.js', __dirname+"\n"+JSON.stringify(cfg), err=>{
        //   if(err){
        //     console.log(err)
        //   }
        // })
			}
    },
    devServer: {
      // https: true,
      port: 8888,
      open: false // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: 'all',
    // framework: {
    //   components: [
    //     'QLayout',
    //     'QLayoutHeader',
    //     'QLayoutDrawer',
    //     'QPageContainer',
    //     'QPage',
    //     'QToolbar',
    //     'QToolbarTitle',
    //     'QBtn',
    //     'QIcon',
    //     'QList',
    //     'QListHeader',
    //     'QItem',
    //     'QItemMain',
    //     'QItemSide'
    //   ],
    //   directives: [
    //     'Ripple'
    //   ],
    //   // Quasar plugins
    //   plugins: [
    //     'Notify'
    //   ]
    // },
    // animations: 'all' --- includes all animations
    animations: [
    ],
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      id: 'org.cordova.quasar.app'
    },
    electron: {
      extendWebpack (cfg) {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.0'
  }
}
