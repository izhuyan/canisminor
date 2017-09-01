export default {
	'entry'              : 'src/index.js',
	'publicPath'         : '/',
	'disableCSSModules'  : true,
	'sass'               : true,
	'theme'              : 'src/style/theme.js',
	'extraBabelPlugins'  : [
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
	'autoprefixer'       : {
		'browsers': [
			'iOS >= 8',
			'Android >= 4'
		]
	},
	'env'                : {
		'development': {
			'extraBabelPlugins': [
				'dva-hmr',
				'transform-runtime'
			]
		},
		'production' : {
			'extraBabelPlugins': [
				'transform-runtime'
			]
		}
	},
	'dllPlugin'          : {
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
