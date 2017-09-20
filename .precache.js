module.exports = {
	stripPrefix: 'dist/',
	staticFileGlobs: [
		'dist/img/**/*',
		'dist/favicons/*',
		'dist/font/*',
		'dist/*common*'
	],
	dontCacheBustUrlsMatching: /./,
	swFilePath: 'dist/precache.js'
};