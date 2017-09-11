import path from 'path';

export default {
	entry            : {
		'index' : './src/index.js',
		'common': './src/vendor.js'
	},
	multipage        : true,
	publicPath       : '/',
	disableCSSModules: false,
	hash             : true,
	sass             : {
		sourceMap   : process.env.NODE_ENV === 'development',
		includePaths: [
			'node_modules',
			'src/style'
		]
	},
	theme            : 'src/style/theme.js',
	extraBabelPlugins: [
		'transform-runtime',
		'lodash',
		[
			'import',
			[
				{
					'libraryName': 'antd',
					'style'      : true
				}
			]
		]
	],
	autoprefixer     : {
		browsers: [
			'iOS >= 8',
			'Android >= 4'
		]
	},
	env              : {
		development: {
			'extraBabelPlugins': [
				'dva-hmr'
			]
		}
	},
	dllPlugin        : {
		exclude: [
			'babel-runtime'
		],
		include: [
			'dva/router',
			'dva/saga',
			'dva/fetch'
		]
	}
};

