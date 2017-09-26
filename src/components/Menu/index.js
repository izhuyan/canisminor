import classnames from 'classnames/bind';
import { Link } from 'dva/router';
import { Component } from 'react';
import styles from './index.scss';

export default class extends Component {

	state = {open: false};

	onClick = () => {
		this.setState({open: !this.state.open});
	};

	render() {
		const {content} = this.props;
		const menuList  = content.map((item, key) => (
			<Link
				key={key}
				className={styles.item}
				to={item.to}
				children={item.title}
			/>
		));

		const classConfig = classnames.bind(styles)(
			{[styles.opened]: this.state.open}
		);

		return (
			<div className={classConfig} onClick={this.onClick}>
				<div className={styles.menu}>{this.state.open?menuList:''}</div>
				<div className={styles.icon}>
					<div className={styles.cls}/>
					<div className={styles.cls}/>
					<div className={styles.cls}/>
				</div>
			</div>
		);
	};
}
