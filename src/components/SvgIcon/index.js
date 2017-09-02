import './index.scss';
import classnames from "classnames"
export default ({type,className,...other}) => {
	const useTag = `<use xlink:href="#icon-${type}" />`;
	return <svg
		className={classnames("svg-icon",className)}
		aria-hidden={true}
		dangerouslySetInnerHTML={{__html: useTag}}
		{...other}
	/>;
};