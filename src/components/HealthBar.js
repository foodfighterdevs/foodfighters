import React from "react";
import "./bars.css";

class Bar extends React.Component {
	constructor(props) {
		super(props);
		this.click = this.click.bind(this);
		this.state = { curHealth: 500, maxHealth: 500 };
	}
	click(modification) {
		if (this.state.curHealth > 0) {
			this.setState({ curHealth: this.state.curHealth + modification });
		}
	}
	render() {
		if (this.state.curHealth < 0) {
			this.setState({ curHealth: 0 });
		}
		if (this.state.curHealth > this.state.maxHealth) {
			this.setState({ curHealth: this.state.maxHealth });
		}
		// pixed_width must match width of sprite box in PracticeMode.css
		let pixel_width = 125;
		let perc = (this.state.curHealth / this.state.maxHealth) * pixel_width;
		let style = { width: perc };
		return (
			<div>
				<div className="health-box" onClick={() => this.click(-18)}>
					<div className="health-bar-red" style={style}></div>
					<div className="health-bar-blue" style={style}></div>
					<div className="health-bar" style={style}></div>
					<div className="health-bar-text">
						{this.state.curHealth + "/" + this.state.maxHealth}
					</div>
				</div>
			</div>
		);
	}
}

// const Bar = props => {
// 	// $('.total').html();
// 	// $(".health-bar-text").html()
// 	// $(".health-bar").css()
// 	let style = { width: "100%" };

// 	return (
// 		<div className="health-box" style={style} onClick={props.click}>
// 			<div className="health-bar-red"></div>
// 			<div className="health-bar-blue"></div>
// 			<div className="health-bar"></div>
// 			<div className="health-bar-text">{curHealth + "/" + maxHealth}</div>
// 		</div>
// 	);
// };

export default Bar;
