import React from 'react';

class KeyPrompt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			letterArray: [
				'A',
				'B',
				'C',
				'D',
				'E',
				'F',
				'G',
				'H',
				'I',
				'J',
				'K',
				'L',
				'M',
				'N',
				'O',
				'P',
				'Q',
				'R',
				'S',
				'T',
				'U',
				'V',
				'W',
				'X',
				'Y',
				'Z'
			],
			letterShown: 3,
			enemy_move: null
		};
	}
	componentDidMount() {
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
						letterShown: this.state.letterArray[Math.floor(Math.random() * 26)]
					});
					// Enemy tries to do damage
					this.handle_enemy_prompt_press();
				}, 1000);
			}, 1000);
		}, 1000);
	}
	handle_player_prompt_press(e) {
		// Happens to be secure against users matching countdown numbers
		if (
			e.key.toUpperCase() === this.state.letterShown &&
			this.props.enemyCurHealth !== 0
		) {
			this.props.changeEnemyHealth(-50);
			if (this.props.enemyCurHealth !== 0) {
				this.countdown();
			} else {
				setTimeout(() => {
					alert('Good job');
				}, 3000); // Based on health-bar-red css transition time
			}
			clearTimeout(this.state.enemy_move);
		}
	}
	handle_enemy_prompt_press() {
		//const test = this.props.playerCurHealth;
		//console.log(test);
		this.setState({
			enemy_move: setTimeout(() => {
				//if (this.props.playerCurHealth !== 0) {
				this.props.changePlayerHealth(-50);
				if (this.props.playerCurHealth !== 0) {
					this.countdown();
				} else {
					setTimeout(() => {
						alert('Bad job');
					}, 3000); // Based on health-bar-red css transition time
				}
				//}
			}, Math.floor(Math.random() * 1000) + 500) // 0.5 second to 1.5 seconds
		});
	}
	render() {
		return (
			<div>
				{this.state.letterShown}
				{
					(document.onkeydown = e => {
						this.handle_player_prompt_press(e);
					})
				}
			</div>
		);
	}
}

export default KeyPrompt;
