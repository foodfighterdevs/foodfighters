import $ from "jquery";
import React from "react";
import "./bars.css";

class Bar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { curHealth: 500, maxHealth: 500 };
	}
	click(modification) {
		this.setState({ curHealth: this.state.curHealth + modification });

		if (this.state.curHealth < 0) {
			this.setState({ curHealth: 0 });
		}

		if (this.state.curHealth > this.state.maxHealth) {
			this.setState({ curHealth: this.state.maxHealth });
		}

		let a = this.state.curHealth * (100 / this.state.maxHealth);

		$(".health-bar-text").html(
			this.state.curHealth + "/" + this.state.maxHealth
		);
		$(".health-bar-red").animate(
			{
				width: a + "%"
			},
			700
		);
		$(".health-bar").animate(
			{
				width: a + "%"
			},
			500
		);
		$(".health-bar-blue").animate(
			{
				width: a + "%"
			},
			300
		);
		$(".total").html(this.state.curHealth + "/" + this.state.maxHealth);
	}
	render() {
		let style = { width: "100%" };
		return (
			<div>
				<div
					className="health-box"
					style={style}
					onClick={() => this.click(-18)}
				>
					<div className="health-bar-red"></div>
					<div className="health-bar-blue"></div>
					<div className="health-bar"></div>
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
