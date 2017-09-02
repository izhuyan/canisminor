import {Typist, Icon, SvgIcon, IntroIcon, DocTitle, Showcase, AwardList, ExpList, Button} from '../../components';
import './index.scss';

export default () => {
	const introHeight = (min = 0) => {
		return {minHeight: `${parseInt(window.innerHeight) - min}px`};
	};

	const docData = [
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
					<Typist className="desc">UI / UX Designer & FE Developer</Typist>
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
						{docData.map((doc, key) => <IntroIcon key={key} type={doc.type} text={doc.text}/>)}
					</div>
				</div>
		);
	};

	const intro_3 = () => {
		let showcaseData = [
			{title: 'born:', desc: '1990.9.30'},
			{title: 'mobile:', desc: '153-0585-3008'},
			{title: 'e-mail:', desc: 'i@canisminor.cc'}
		];
		return (
				<div className="intro-3">
					<DocTitle content={docData[0]}/>
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
						<Showcase content={showcaseData}/>
					</div>
				</div>
		);
	};

	const intro_4 = () => {
		let showcaseData = [
			{title: 'MAJOR:', desc: 'Visual Design'},
			{title: 'GPA:', desc: '3.58/4'},
			{title: 'IELTS:', desc: '6.5/9'}
		];

		let awardData = [
			[
				'中国美术学院学年奖学金|2009-2010，一等奖学金',
				'中国美术学院|2009-2010，三好学生/优秀学生干部'
			],
			[
				'中国美术学院学年奖学金|2010-2011，一等奖学金',
				'中国美术学院|2010-2011，三好学生/优秀学生干部'
			],
			[
				'中国国家奖学金|2012，15/23,000人',
				'中国美术学院学年奖学金|2011-2012，一等奖学金',
				'中国美术学院|2011-2012，三好学生/优秀学生干部',
				'Accepted Works Trierenberg Super Circuit|2012, Acceptance Award',
				'International Photographic Festival|11th Shanghai International|2012, Communication Award',
				'Third BrotherWin Cup|International Originality Design Contest|2012, Excellence Award'
			],
			[
				'中国浙江省|2013，省优秀毕业生',
				'中国美术学院|2013，校优秀毕业生',
				'中国美术学院|2013，毕业设计金奖',
				'中国美术学院|2013，优秀毕业论文'
			]
		];
		return (
				<div className="intro-4">
					<DocTitle content={docData[1]}/>
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
					<Showcase content={showcaseData}/>
					<div className="school-award">
						<AwardList content={awardData}/>
					</div>

				</div>
		);
	};

	const intro_5 = () => {
		return (
				<div className="intro-5">
					<DocTitle content={docData[2]}/>
					<div className="exp-group">
						<ExpList/>
					</div>
				</div>
		);
	};

	const intro_6 = () => {

		const specData = [
			{
				img: (<img className="spec-item-img" width="826" src='img/spec-1.png'/>),
				text: 'XMUED Design Flow，目前熊猫金库UED团队设计流程技术选型，Atomic Design 原子设计模式项目实践，通过Airbnb开源插件react-sketchapp维护及迭代sketch/react/react-native三端组件库，并引入真实数据进行设计。',
				btn: (
						<Button url="https://github.com/airbnb/react-sketchapp">
							See react-sketchapp
						</Button>
				)
			},
			{
				img: (<img className="spec-item-img" width="495" src='img/spec-2.png'/>),
				text: 'Sketch插件开发者，独立开发sketch-name-organizer/sketch-select/sketch-move-half-pixel，均被Sketc官方收录，marketch代码贡献者，阿里sketch插件开发讨论组成员。',
				btn: (
						<Button url="https://github.com/canisminor1990?utf8=%E2%9C%93&tab=repositories&q=sketch&type=&language=">
							Discover more plugins
						</Button>
				)
			},
			{
				img: (
						<div className="spec-item-img-group">
							<img className="spec-item-img" width="324" height="324" src='img/spec-3-1.png'/>
							<img className="spec-item-img" width="324" height="324" src='img/spec-3-2.png'/>
						</div>
				),
				text: 'Minecraft第三方开发者，Canisminor Craft 资源包作者，迭代7个大版本，累计32w次下载，2012年设计Minecraft全球最大皮肤站skinme，注册用户破5000万，皮肤库存150万份，日均上传2000份，现已被收购。',
				btn: (
						<div className="spec-item-btn">
							<Button url="https://coding.net/u/canisminor1990/p/CanisminorCraft/git">
								Canisminor Craft
							</Button>
							<Button url="http://www.skinme.cc/skinme/index/aboutus" ghost>
								Discover Skinme
							</Button>
						</div>
				)
			}
		];

		const SpecItem = ({img, text, btn}) => (
				<div className="spec-item">
					{img}
					<div className="spec-item-desc">{text}</div>
					{btn}
				</div>
		);

		return (
				<div className="intro-6">
					<DocTitle content={docData[3]}/>
					<div className="spec-group">
						{
							specData.map(item => (
									<SpecItem
											img={item.img}
											text={item.text}
											btn={item.btn}
									/>
							))
						}
					</div>
				</div>
		);
	};

	const intro_7 = () => {

		const vdData = [
			{
				title: 'Graphic Design',
				item: ['Adobe Photoshop',
				       'Adobe Illustrator',
				       'Adobe InDesign']
			},
			{
				title: 'UI / UX',
				item: ['Sketch',
				       'Figma',
				       'Origami',
				       'Framer']

			},
			{
				title: '3D / Animation',
				item: ['Cinema4D',
				       'Adobe AfterEffects',
				       'Live2D']
			}
		];

		return (
				<div className="intro-7">
					<DocTitle content={docData[4]}/>
					<div className="vd-group">
						{
							vdData.map((item, key) => (
									<div className="vd-card" key={key}>
										<div className="title">{item.title}</div>
										<div className="desc">{
											item.item.map((str, i) => <p key={i}>{str}</p>)
										}</div>
									</div>
							))
						}
					</div>
					<div className="color-group">
						<div className="color-item"/>
						<div className="color-item"/>
						<div className="color-item"/>
						<div className="color-item"/>
					</div>
				</div>
		);
	};

	const intro_8 = () => {

		const feData = [
			{icon: 'webpack', title: 'Webpack'},
			{icon: 'react', title: 'React'},
			{icon: 'vue', title: 'Vue'},
			{icon: 'angular', title: 'Angular'},
			{icon: 'es6', title: 'ES6'},
			{icon: 'sass', title: 'SASS'},
			{icon: 'less', title: 'LESS'},
			{icon: 'postCss', title: 'postCSS'},
			{icon: 'gulp', title: 'Gulp'},
			{icon: 'yarn', title: 'Yarn'},
			{icon: 'makdown', title: 'Markdown'},
			{icon: 'nodeJs', title: 'NodeJS'},
			{icon: 'jekyll', title: 'Jekyll'},
			{icon: 'hexo', title: 'Hexp'}
		];
		return (
				<div className="intro-8">
					<DocTitle content={docData[5]}/>
					<div className="fe-group">
						{
							feData.map((item, key) => (
									<div className="fe-item" key={key}>
										<SvgIcon type={`fe-${item.icon}`}/>
										{item.title}
									</div>
							))
						}
					</div>
				</div>
		);
	};

	const intro_9 = () => {
		return (
				<div className="intro-9">
					<DocTitle content={docData[6]}/>
					<div className="por-group">
						<img src="img/por-1.png" width="940"/>
						<Button to="/project">
							Discover project story
						</Button>
					</div>
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