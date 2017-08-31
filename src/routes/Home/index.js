import { Icon, IntroIcon, DocTitle, Showcase } from '../../components';
import './index.scss';

export default () => {
	const introHeight = (min = 0) => {
		return {minHeight: `${parseInt(window.innerHeight) - min}px`};
	};

	const docList = [
		{type: 'profile', text: 'profile', desc: '个人资料与简介'},
		{type: 'edu', text: 'education', desc: '视觉传达系 2009-2013'},
		{type: 'exp', text: 'experience', desc: '工作履历 2013-2017'},
		{type: 'spec', text: 'specialities', desc: '专业能力/跨界涉猎'},
		{type: 'ued', text: 'vd skills', desc: '设计技术栈'},
		{type: 'fe', text: 'fe skills', desc: '前端技术栈'},
		{type: 'portfolio', text: 'portfolio', desc: 'Time to discover some recent projects'}
	];

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
				<div className="doc">
					{docList.map((doc, key) => <IntroIcon key={key} type={doc.type} text={doc.text}/>)}
				</div>
			</div>
		);
	};

	const intro_3 = () => {
		let data = [
			{title: 'born:', desc: '1990.9.30'},
			{title: 'mobile:', desc: '153-0585-3008'},
			{title: 'e-mail:', desc: 'i@canisminor.cc'}
		];
		return (
			<div className="intro-3">
				<DocTitle content={docList[0]}/>
				<div className="avatar-box">
					<div className="avatar-img"/>
					<div className="avatar-text">
						<Icon className="title" type="name
						"/>
						<div className="desc">现居北京，UED全栈设计师，毕业于CAA中国美术学院09级视觉传达。>5年从业经验，专注于 Design » Code 设计流程管理和UI原子设计模式(Atomic
							Design)及自动化设计，具备流行前端技术栈ES6/React/Vue，阿里开源项目重度用户Antd/Dva/Roadhog，Sketch第三方插件作者。
						</div>
					</div>
				</div>
				<div className="info-box">
					<div className="info-box-img"/>
					<Showcase content={data}/>
				</div>
			</div>
		);
	};

	const intro_4 = () => {
		let data = [
			{title: 'MAJOR:', desc: 'Visual Design'},
			{title: 'GPA:', desc: '3.58/4'},
			{title: 'IELTS:', desc: '6.5/9'}
		];
		return (
			<div className="intro-4">
				<DocTitle content={docList[1]}/>
				<div className="school-box">
					<Icon className="school-img" type="caa-logo
						"/>
					<div className="school-text">
						<Icon className="title" type="caa-text
						"/>
						<div className="desc">
							China Academy of Art<br/>
							Top Art School World Ranking: 7th
						</div>
					</div>
				</div>
				<Showcase content={data}/>
			</div>
		);
	};

	const intro_5 = () => {
		return (
			<div className="intro-5">
				<DocTitle content={docList[2]}/>
			</div>
		);
	};

	const intro_6 = () => {
		return (
			<div className="intro-6">
				<DocTitle content={docList[3]}/>
			</div>
		);
	};

	const intro_7 = () => {
		return (
			<div className="intro-7">
				<DocTitle content={docList[4]}/>
			</div>
		);
	};

	const intro_8 = () => {
		return (
			<div className="intro-8">
				<DocTitle content={docList[5]}/>
			</div>
		);
	};

	const intro_9 = () => {
		return (
			<div className="intro-9">
				<DocTitle content={docList[6]}/>
			</div>
		);
	};

	return (
		<div className="intro">
			{intro_1()}
			{intro_2()}
			{intro_3()}
			{intro_4()}
			{intro_5()}
			{intro_6()}
			{intro_7()}
			{intro_8()}
			{intro_9()}
		</div>
	);
}