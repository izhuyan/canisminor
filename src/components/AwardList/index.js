import {Icon} from '../';

import './index.scss';

export default ({content}) => {
	return (
		<div className="award-list">
			{
				content.map((group, key) =>
					<div className="award-list-group" key={key}>
						{
							group.map((item, k) =>
								<div className="award-list-item" key={k}>
									<Icon type={(k == 0) ? "point-main" : "point"}/>
									<div className="desc">
										{item.split("|").map((str, i) => <p key={i}>{str}</p>)}
									</div>
								</div>
							)
						}
					</div>)
			}
		</div>
	)
		;
}