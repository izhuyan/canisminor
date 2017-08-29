module.exports = {
	// Popover
	// ---
	//** Popover body background color
	'@popover-bg'               : '#fff',
	//** Popover text color
	'@popover-color'            : '@text-color',
	//** Popover maximum width
	'@popover-min-width'        : '177px',
	//** Popover arrow width
	'@popover-arrow-width'      : '4px',
	//** Popover arrow color
	'@popover-arrow-color'      : '@popover-bg',
	//** Popover outer arrow width
	'@popover-arrow-outer-width': '(@popover-arrow-width + 1)',
	//** Popover outer arrow color
	'@popover-arrow-outer-color': 'fadeout(@border-color-base, 30%)',
	//** Popover distance with trigger
	'@popover-distance'         : '@popover-arrow-width + 4'
};