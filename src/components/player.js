import React from "react";
import Bar from "./HealthBar.js";

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.name };
	}

	render() {
		return (
			<div>
				<Bar />
				<Image />
				<Special />
			</div>
		);
	}
}

// function Health() {
// 	return <Bar onClick/>;
// }

function Image(props) {
	//let effect = ""

	return (
		<img
			src="https://caribvue.files.wordpress.com/2011/05/125x125.jpg"
			alt="Your Dish!"
		/>
	);
}

function Special(props) {
	return <div>SPECIAL</div>;
}

export default Player;
