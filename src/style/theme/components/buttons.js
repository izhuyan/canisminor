const color    = require('./../color');

module.exports = {
	// Buttons
	'@btn-font-weight'       : '450',
	'@btn-border-radius-base': '@border-radius-base',
	'@btn-border-radius-sm'  : '@border-radius-base',

	'@btn-primary-color': '#fff',
	'@btn-primary-bg'   : '@primary-color',

	'@btn-default-color' : color['c-gold-dark'],
	'@btn-default-bg'    : '#fff',
	'@btn-default-border': '@border-color-base',

	'@btn-danger-color' : '@error-color',
	'@btn-danger-bg'    : '@background-color-base',
	'@btn-danger-border': '@border-color-base',

	'@btn-disable-color' : '@disabled-color',
	'@btn-disable-bg'    : '@disabled-bg',
	'@btn-disable-border': '#e3e3e3',

	'@btn-padding-base': '0 16px',
	'@btn-font-size-lg': '@font-size-lg',
	'@btn-padding-lg'  : '@btn-padding-base',
	'@btn-padding-sm'  : '0 8px',

	'@btn-height-base': '32px',
	'@btn-height-lg'  : '44px',
	'@btn-height-sm'  : '28px',

	'@btn-circle-size'   : '@btn-height-base',
	'@btn-circle-size-lg': '@btn-height-lg',
	'@btn-circle-size-sm': '@btn-height-sm',

	'@btn-group-border': '@primary-7',

	// Radio buttons
	'@radio-button-bg'   : '@btn-default-bg',
	'@radio-button-color': '@btn-default-color'
};
