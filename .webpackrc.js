import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

export default {
	entry              : './src/index.js',
	publicPath         : '/',
	disableCSSModules  : false,
	hash               : true,
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
	commons            : [
		{
			async    : '__common',
			children : true,
			minChunks: 2
		}
	],
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
			extraPostCSSPlugins: [
				cssnano(
					{safe: true},
					{preset: ['default', {discardComments: {removeAll: true}}]})
			]
		}
	}
};
