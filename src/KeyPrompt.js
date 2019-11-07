import React from "react";

class KeyPrompt extends React.Component {
	constructor(props) {
		super(props);
		this.state = { letterArray: ["A", "B", "C", "D"], letterShown: 3 };
		this.handleKeyPress = this.handleKeyPress.bind(this);
		// Starts the first countdown prompt
		// this.handleKeyPress();
		this.countdown();
	}
	countdown() {
		setTimeout(() => {
			this.setState({ letterShown: 2 });
			setTimeout(() => {
				this.setState({ letterShown: 1 });
				setTimeout(() => {
					this.setState({
						letterShown: this.state.letterArray[Math.floor(Math.random() * 4)]
					});
				}, 1000);
			}, 1000);
		}, 1000);
	}
	handleKeyPress = event => {
		// if (event.key === "Enter") {
		// 	alert("good job");
		// }
		alert("good jobsssss");
	};
	render() {
		return (
			<div onKeyDown={() => this.handleKeyPress()}>
				{this.state.letterShown}
			</div>
		);
	}
}

export default KeyPrompt;
