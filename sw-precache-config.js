module.exports = {
	stripPrefix: 'dist/',
	staticFileGlobs: [
		'dist/img/**/*',
		'dist/favicon/*',
		'dist/font/*',
		'dist/*common*'
	],
	dontCacheBustUrlsMatching: /./,
	swFilePath: 'dist/sw-precache.js'
};