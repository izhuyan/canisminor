import csswring from 'csswring';
import pxtorem from 'postcss-pxtorem';

export default {
	entry              : {
		index : './src/index.js',
		common: './src/vendor.js'
	},
	multipage          : true,
	publicPath         : '/',
	disableCSSModules  : false,
	hash               : true,
	sass               : {
		sourceMap   : process.env.NODE_ENV === 'development',
		includePaths: ['node_modules', 'src/style']
	},
	theme              : 'src/style/theme.js',
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
							rootValue    : 16,
							propWhiteList: []
						})
	],
	extraBabelPlugins  : [
		'transform-runtime',
		'lodash',
		[
			'import',
			[
				{
					libraryName: 'antd',
					style      : true
				}
			]
		]
	],
	autoprefixer       : {
		browsers: ['iOS >= 8', 'Android >= 4']
	},
	env                : {
		development: {
			extraBabelPlugins: ['dva-hmr']
		},
		production : {
			extraPostCSSPlugins: [csswring()]
		}
	},
	dllPlugin          : {
		exclude: ['babel-runtime', 'gulp', 'eslint', 'stylelint'],
		include: ['dva/router', 'dva/saga', 'dva/fetch', 'dva/dynamic']
	}
};
