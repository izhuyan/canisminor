const color    = require('./../color');
module.exports = {
	// -------- Colors -----------
	'@primary-color'  : color['c-primary'],
	'@info-color'     : color['c-gold-dark'],
	'@success-color'  : '@green-6',
	'@error-color'    : color['c-primary-highlight'],
	'@highlight-color': color['c-primary-highlight'],
	'@warning-color'  : color['c-primary-highlight'],
	'@normal-color'   : '#d9d9d9',

	// Background color for `<body>`
	'@body-background'          : color['c-grey-bg'],
	// Base background color for most components
	'@component-background'     : '#fff',
	'@heading-color'            : color['c-font-dark'],
	'@text-color'               : color['c-font-normal'],
	'@text-color-secondary'     : color['c-font-light'],
	'@heading-color-dark'       : color['c-font-dark'],
	'@text-color-dark'          : color['c-font-dark'],
	'@text-color-secondary-dark': color['c-font-normal'],

	// The background colors for active and hover states for things like
	// list items or table cells.
	'@item-active-bg': '@primary-1',
	'@item-hover-bg' : '@primary-1',

	// LINK
	'@link-color'           : color['c-gold-normal'],
	'@link-hover-color'     : color['c-gold-highlight'],
	'@link-active-color'    : color['c-gold-highlight'],
	'@link-hover-decoration': 'none',

	// Border color
	'@border-color-base' : color['c-gold-light'],        // base border outline a component
	'@border-color-split': color['c-grey-split'],        // split border inside a component
	'@border-width-base' : '1px',            // width of the border for a component
	'@border-style-base' : 'solid',          // style of a components border

	// Outline
	'@outline-blur-size': '0',
	'@outline-width'    : '2px',
	'@outline-color'    : '@primary-color',

	// Default background color for disabled states, Collapse wrappers,
	// and several active and hover states.
	'@background-color-base'  : color['c-gold-lightest'],
	'@background-color-active': color['c-gold-normal'],

	// Disabled states
	'@disabled-color'     : '#c2c2c2',
	'@disabled-bg'        : '#f8f8f8',
	'@disabled-color-dark': 'fade(#fff, 35%)',

	// Shadow
	'@shadow-color'   : 'rgba(0, 0, 0, .2)',
	'@box-shadow-base': '@shadow-1-down',
	'@shadow-1-up'    : '0 -1px 6px @shadow-color',
	'@shadow-1-down'  : '0 1px 6px @shadow-color',
	'@shadow-1-left'  : '-1px 0 6px @shadow-color',
	'@shadow-1-right' : '1px 0 6px @shadow-color',
	'@shadow-2'       : '0 2px 8px @shadow-color'
};
