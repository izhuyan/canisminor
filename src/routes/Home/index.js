import './index.scss';

export default () => {
	const introHeight = (min = 0) => {
		return {height: `${parseInt(window.innerHeight) - min}px`};
	};
	console.log(introHeight());

	const intro_1 = () => {
		return (
			<div className="intro-1" style={introHeight(150)}>
				<div className="title">CanisMinor</div>
				<div className="desc">UI / UX Designer & FE Developer</div>
			</div>
		);
	};

	const intro_2 = () => {
		return (
			<div className="intro-2" style={introHeight()}>
				<div className="box-title">Introduciton</div>
				<div className="title">{'UI/UX Designer. FE Developer.'.toUpperCase()}</div>
				<div className="desc">Hi,这里是杨昱帆，感谢您花时间浏览我的Resume.以下将会分7个版块阐述我的技术栈和知识构成</div>
			</div>
		);
	};

	return (
		<div className="intro">
			{intro_1()}
			{intro_2()}

		</div>
	);
}