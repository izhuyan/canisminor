import React from 'react'
import {Link} from 'dva/router'
import classnames from 'classnames';
import "./index.scss"

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({open: !this.state.open});
	}

	render() {

		const {content} = this.props;

		const menuList = this.props.content.map((item, key) => (
				<Link key={key}
				      className="menu-item"
				      to={item.to}
				>
					{item.title}
				</Link>
		))

		return (
				<div className={classnames('menu-open', {'menu-oppenned': this.state.open})} onClick={this.onClick}>
					<div className="sub-menu">
						<div className="sub-menu-bg"/>
						{menuList}
					</div>
					<div className="menu-icon">
						<div className="cls"/>
						<div className="cls"/>
						<div className="cls"/>
					</div>
				</div>
		)
	}
}