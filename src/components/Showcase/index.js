import './index.scss';

export default ({content}) => (
	<div className="showcase">
		{content.map((item, key) =>
			             <div key={key} className="showcase-item">
				             <div className="title">{item.title}</div>
				             <div className="desc">{item.desc}</div>
			             </div>)}
	</div>
)