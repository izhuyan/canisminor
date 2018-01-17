import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

export default {
	entry              : {
		index : './src/index.js',
		vendor: ['classnames',
		         'dva',
		         'dva/router',
		         'dva/fetch',
		         'dva/dynamic',
		         'dva-loading',
		         'path',
		         'react',
		         'react-dom',
		         'react-lazyload',
		         'react-typist',
		         'weixin-jsapi',
		         'plyr',
		         'nprogress',
		         'prismjs',
		         'gitment',
		         'styled-components',
		         'polished']
	},
	publicPath         : '/',
	disableCSSModules  : false,
	hash               : true,
	ignoreMomentLocale : true,
	sass               : {
		includePaths: ['node_modules', 'src/style']
	},
	theme              : 'src/style/theme.js',
	html               : {
		'template': './src/index.ejs'
	},
	define             : {
		'$dirname': __dirname,
		'$isDev'  : process.env.NODE_ENV === 'development'
	},
	proxy              : {
		'/api': {
			target      : 'https://canisminor.cc',
			changeOrigin: true,
			xfwd        : true,
			secure      : true
		}
	},
	extraPostCSSPlugins: [
		pxtorem({
			        rootValue: 16
		        })
	],
	extraBabelPlugins  : [
		'transform-decorators-legacy',
		'lodash',
		['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]
	],
	browserslist       : ['iOS >= 8', 'Android >= 4'],
	env                : {
		development: {
			extraBabelPlugins: [
				'dva-hmr', [
					'babel-plugin-styled-components', {
						'displayName': false
					}
				]
			]
		},
		production : {
			commons            : [
				{
					name     : 'vendor',
					filename : 'vendor.[chunkhash].js',
				}
			],
			extraPostCSSPlugins: [
				cssnano(
					{safe: true},
					{preset: ['default', {discardComments: {removeAll: true}}]})
			]
		}
	}
};

