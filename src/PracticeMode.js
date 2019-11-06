import React from "react";
import Player from "./components/Player.js";
import "./PracticeMode.css";

class PracticeMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = { something: null };
	}
	render() {
		return (
			<div>
				<div id="enemy" className="area">
					<Player name="computer" />
					{/* <div className="special-move">Special Move</div> */}
					<div id="enemy-sprite" className="sprite">
						Enemy Sprite
					</div>
				</div>
				<div id="prompt-holder">
					<div id="key-prompt">Q</div>
				</div>
				<div id="player" className="area">
					{/* <div className="special-move">Special Move</div> */}
					<Player name="user" />
					<div id="player-sprite" className="sprite">
						{/* Player Sprite */}
					</div>
				</div>
			</div>
		);
	}
}

export default PracticeMode;
