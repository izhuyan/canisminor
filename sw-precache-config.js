module.exports = {
	stripPrefix: 'dist/',
	staticFileGlobs: [
		'dist/manifest.json',
		'dist/favicon/**/*',
		'dist/img/**/*',
		'dist/font/*',
		'dist/*common*'
	],
	dontCacheBustUrlsMatching: /./,
	swFilePath: 'dist/sw-precache.js'
};