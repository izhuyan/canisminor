import "./index.scss"

export default () => {
	const content = [
		{
			img  : "exp-1",
			color: "#999999",
			title: "Freelancer, GapYear",
			time : "2013，自由职业者，间隔年",
			desc : "创刊独自杂志『须臾映社 Instant-Zine』发刊24期|http://instant-zine.lofter.com/"
		},
		{
			img  : "exp-2",
			color: "#1CEBA7",
			title: "Senior UI/UX Designer, Team Leader",
			time : "2014.5 - 2015.11，高级UED设计师，产品线主设",
			desc : "就职沪江网，负责沪江学习 · 沪江开心词场 · 沪江小D三条产品线设计|定义沪江UED视觉形象，引入动效工具Origami，建立基于Sketch/Zeplin的设计流水线|其中作为主设改版开心词场5.0：荣获2015年AppStore背词类App第一名"
		},
		{
			img  : "exp-3",
			color: "#FF9800",
			title: "Co-Founder, UED Director",
			time : "2015.11 - 至今，联合创始人，UED设计总监",
			desc : "联合创办熊猫金库，创业初期的全栈设计师至中期的设计管理|产品上线一年达成100亿交易额，获2016年中国最受欢迎互联网金融品牌|将前端技术栈引入UED部门，建立产品自动化UI仓库/React组件库"
		}
	]
	return (
		<div className="exp-list">
			{
				content.map((item, key) =>
					<div className="exp-list-item" key={key}>
						<div className="exp-list-img" style={{
							backgroundImage: `url(/img/${item.img}.png)`,
							boxShadow      : `0 12px 24px 0 ${hexToRgb(item.color)}`
						}}/>
						<div className="exp-list-text">
							<div className="title">{item.title}</div>
							<div className="time">{item.time}</div>
							<div className="desc">{item.desc.split("|").map((str, i) => <p key={i}>{str}</p>)}</div>
						</div>
					</div>
				)
			}
		</div>
	)
}

function hexToRgb(hex) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	const rgba   = [
		parseInt(result[1], 16),
		parseInt(result[2], 16),
		parseInt(result[3], 16),
		.25
	]
	return `rgba(${rgba.join(',')})`
}