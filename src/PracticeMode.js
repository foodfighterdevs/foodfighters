import React from "react";
import Player from "./components/Player.js";
import "./PracticeMode.css";
import KeyPrompt from "./KeyPrompt";
class PracticeMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			enemyCurHealth: 500,
			enemyMaxHealth: 500,
			playerCurHealth: 500,
			playerMaxHealth: 500
		};
		this.change_enemy_health = this.change_enemy_health.bind(this);
	}
	change_enemy_health(modification) {
		if (this.state.enemyCurHealth + modification <= 0) {
			this.setState({
				enemyCurHealth: 0
			});
		} else {
			this.setState({
				enemyCurHealth: this.state.enemyCurHealth + modification
			});
		}
	}
	render() {
		const enemyCurHealth = this.state.enemyCurHealth;
		const enemyMaxHealth = this.state.enemyMaxHealth;
		return (
			<div>
				<div id="enemy" className="area">
					<Player
						name="enemy"
						curHealth={enemyCurHealth}
						maxHealth={enemyMaxHealth}
					/>
					{/* <div className="special-move">Special Move</div> */}
					{/* <div id="enemy-sprite" className="sprite">
						Enemy Sprite
					</div> */}
				</div>
				<div id="prompt-holder">
					<div id="key-prompt">
						<KeyPrompt changeHealth={this.change_enemy_health} />
					</div>
				</div>
				<div id="player" className="area">
					{/* <div className="special-move">Special Move</div> */}
					<Player
						name="player"
						curHealth={this.state.playerCurHealth}
						maxHealth={this.state.playerMaxHealth}
					/>
					{/* <div id="player-sprite" className="sprite">
						Player Sprite
					</div> */}
				</div>
			</div>
		);
	}
}

export default PracticeMode;
