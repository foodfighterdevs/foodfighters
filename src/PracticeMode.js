import React from "react";

class PracticeMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = { something: null };
	}
	render() {
		return (
			<div>
				<div id="enemy" className="area">
					<div className="special-move">Special Move</div>
					<div id="enemy-sprite" className="sprite">
						Enemy Sprite
					</div>
					<div id="player-health" className="health">
						Health
					</div>
				</div>
				<div id="prompt-holder">
					<div id="key-prompt">Q</div>
				</div>
				<div id="player" className="area">
					<div className="special-move">Special Move</div>
					<div id="player-sprite" className="sprite">
						Player Sprite
					</div>
					<div id="player-health" className="health">
						Health
					</div>
				</div>
			</div>
		);
	}
}

export default PracticeMode;
