const _ = require('lodash')

module.exports = _.assign(
	require('./global/color'),
	require('./global/layout'),
	require('./global/font'),
	require('./global/iconfont'),
	require('./components/buttons'),
	require('./components/card'),
	require('./components/input'),
	require('./components/tag')
)


