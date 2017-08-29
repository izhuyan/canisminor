import classname from 'classnames';

export default ({type, className, ...other}) => {
	const classConfig = classname({
		                              'cm-iconfont'   : true,
		                              [`icon-${type}`]: type,
		                              [className]     : className
	                              });
	return (
		<span className={classConfig} {...other} />
	);
}