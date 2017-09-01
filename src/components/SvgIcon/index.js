import './index.scss';

export default ({type}) => {
	const useTag = `<use xlink:href="#icon-${type}" />`;
	return <svg
		className="svg-icon"
		aria-hidden={true}
		dangerouslySetInnerHTML={{__html: useTag}}
	/>;
};