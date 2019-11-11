import React from 'react';
import './Bars.css';

class Bar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			something: null
		};
	}
	render() {
		// pixed_width must match width of sprite box in PracticeMode.css
		let pixel_width = 125;
		let perc = (this.props.curHealth / this.props.maxHealth) * pixel_width;
		let style = { width: perc };
		return (
			<div>
				<div className="health-box">
					<div className="health-bar-red" style={style}></div>
					<div className="health-bar-blue" style={style}></div>
					<div className="health-bar" style={style}></div>
					<div className="health-bar-text">
						{this.props.curHealth + '/' + this.props.maxHealth}
					</div>
				</div>
			</div>
		);
	}
}

export default Bar;
