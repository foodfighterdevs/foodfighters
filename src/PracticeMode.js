<<<<<<< HEAD
import React from 'react'
import Player from './components/player'

import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
=======
import React from "react";
import "./PracticeMode.css";
>>>>>>> Added login page boilerplate

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
					{/* <div id="key-prompt"><a href="/sandbox/bar_test.html">Q</a></div> */}
					<div id="key-prompt">
						<Router>
							<Link to="/sandbox/bar_test.html">Q</Link>

							<Switch>
								<Route path='/sandbox/bar_test.html' component={() =>
								{
									window.location.href = 'sandbox/bar_test.html'
									return null
								}}>
									
								</Route>
							</Switch>
						</Router>
					</div>
				</div>
				<div id="player" className="area">
					<div className="special-move">Special Move</div>
					<div id="player-sprite" className="sprite">
						{/* Player Sprite */}
						<Player />
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
