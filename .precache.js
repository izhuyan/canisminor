module.exports = {
	stripPrefix: 'dist/',
	staticFileGlobs: [
		'dist/img/**/*',
		'dist/favicons/*',
		'dist/font/*',
		'dist/*vendor*'
	],
	dontCacheBustUrlsMatching: /./,
	swFilePath: 'dist/precache.js'
};