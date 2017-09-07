export default {
	'entry': {
		"index": "./src/index.js",
		"common": "./src/vendor.js"
	},
	"multipage": true,
	'publicPath': '/',
	'disableCSSModules': true,
	'sass': true,
	'hash': true,
	'theme': 'src/style/theme.js',
	'extraBabelPlugins': [
		'transform-runtime',
		'lodash',
		[
			'import',
			[
				{
					'libraryName': 'antd',
					'style': true
				}
			]
		]
	],
	'autoprefixer': {
		'browsers': [
			'iOS >= 8',
			'Android >= 4'
		]
	},
	'env': {
		'development': {
			'extraBabelPlugins': [
				'dva-hmr'
			]
		}
	},
	'xdllPlugin': {
		'exclude': [
			'babel-runtime'
		],
		'include': [
			'dva/router',
			'dva/saga',
			'dva/fetch'
		]
	}
};
