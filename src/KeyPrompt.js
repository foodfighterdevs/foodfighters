import React from "react";

class KeyPrompt extends React.Component {
	constructor(props) {
		super(props);
		this.state = { letterArray: ["A", "B", "C", "D"], letterShown: 3 };
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
	handle_prompt_press(e) {
		// Happens to be secure against users matching countdown numbers
		if (e.key.toUpperCase() === this.state.letterShown) {
			alert("I have done the thing better");
		}
	}
	render() {
		return (
			<div>
				{this.state.letterShown}
				<div>
					{
						(document.onkeydown = e => {
							this.handle_prompt_press(e);
						})
					}
				</div>
			</div>
		);
	}
}

export default KeyPrompt;
