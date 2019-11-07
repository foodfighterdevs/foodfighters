import React from "react";

class KeyPrompt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			letterArray: ["A", "B", "C", "D"],
			letterShown: 3,
			enemy_move: null
		};
		// Starts the first countdown prompt
		this.countdown();
	}
	countdown() {
		this.setState({ letterShown: 3 });
		setTimeout(() => {
			this.setState({ letterShown: 2 });
			setTimeout(() => {
				this.setState({ letterShown: 1 });
				setTimeout(() => {
					this.setState({
						letterShown: this.state.letterArray[Math.floor(Math.random() * 4)]
					});
					// Enemy tries to do damage
					this.handle_enemy_prompt_press();
				}, 1000);
			}, 1000);
		}, 1000);
	}
	handle_player_prompt_press(e) {
		// Happens to be secure against users matching countdown numbers
		if (e.key.toUpperCase() === this.state.letterShown) {
			this.props.changeEnemyHealth(-18);
			this.countdown();
			clearTimeout(this.state.enemy_move);
		}
	}
	handle_enemy_prompt_press() {
		this.setState({
			enemy_move: setTimeout(() => {
				this.props.changePlayerHealth(-18);
				this.countdown();
			}, Math.floor(Math.random() * 1000))
		});
	}
	render() {
		return (
			<div>
				{this.state.letterShown}
				<div>
					{
						(document.onkeydown = e => {
							this.handle_player_prompt_press(e);
						})
					}
				</div>
			</div>
		);
	}
}

export default KeyPrompt;
