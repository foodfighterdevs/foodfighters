import React from 'react';
import Player from './components/Player.js';
import './PracticeMode.css';
import KeyPrompt from './KeyPrompt';
import pizza from './pizza.png';
import steak from './steak.png';
import hit1 from './slightscream-01.flac';
import hit2 from './slightscream-02.flac';
import hit3 from './slightscream-03.flac';
import hit4 from './slightscream-04.flac';
import hit5 from './slightscream-05.flac';
import hit6 from './slightscream-06.flac';
import hit7 from './slightscream-07.flac';
import hit8 from './slightscream-08.flac';
import hit9 from './slightscream-09.flac';
import hit10 from './slightscream-10.flac';
import hit11 from './slightscream-11.flac';
import hit12 from './slightscream-12.flac';
import hit13 from './slightscream-13.flac';
import hit14 from './slightscream-14.flac';
import hit15 from './slightscream-15.flac';
import death from './wilhelm.mp3';

class PracticeMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			enemyCurHealth: 500,
			enemyMaxHealth: 500,
			playerCurHealth: 500,
			playerMaxHealth: 500,
			playerSpecial: 0,
			enemySpecial: 0
		};
		this.onDeath = this.onDeath.bind(this);
		this.onHit = this.onHit.bind(this);
		this.hit1 = new Audio(hit1);
		this.hit2 = new Audio(hit2);
		this.hit3 = new Audio(hit3);
		this.hit4 = new Audio(hit4);
		this.hit5 = new Audio(hit5);
		this.hit6 = new Audio(hit6);
		this.hit7 = new Audio(hit7);
		this.hit8 = new Audio(hit8);
		this.hit9 = new Audio(hit9);
		this.hit10 = new Audio(hit10);
		this.hit11 = new Audio(hit11);
		this.hit12 = new Audio(hit12);
		this.hit13 = new Audio(hit13);
		this.hit14 = new Audio(hit14);
		this.hit15 = new Audio(hit15);

		this.death = new Audio(death);
		this.change_enemy_health = this.change_enemy_health.bind(this);
		this.change_player_health = this.change_player_health.bind(this);
		this.usePlayerSpecial = this.usePlayerSpecial.bind(this);
		this.useEnemySpecial = this.useEnemySpecial.bind(this);
	}

	onHit() {
		let choice = Math.floor(Math.random() * 15) + 1; // 0.5 second to 1.5 seconds
		switch (choice) {
			case 1:
				this.hit1.play();
				break;
			case 2:
				this.hit2.play();
				break;
			case 3:
				this.hit3.play();
				break;
			case 4:
				this.hit4.play();
				break;
			case 5:
				this.hit5.play();
				break;
			case 6:
				this.hit6.play();
				break;
			case 7:
				this.hit7.play();
				break;
			case 8:
				this.hit8.play();
				break;
			case 9:
				this.hit9.play();
				break;
			case 10:
				this.hit10.play();
				break;
			case 11:
				this.hit11.play();
				break;
			case 12:
				this.hit12.play();
				break;
			case 13:
				this.hit13.play();
				break;
			case 14:
				this.hit14.play();
				break;
			case 15:
				this.hit15.play();
				break;
			default:
				this.hit1.play();
		}
	}

	onDeath() {
		this.death.play();
	}

	change_enemy_health(modification) {
		this.setState({
			enemySpecial: this.state.enemySpecial + 20
		});
		document.getElementById('enemy').style.backgroundColor = 'red';
		setTimeout(() => {
			document.getElementById('enemy').style.backgroundColor = '#282c34';
		}, 250); // Timeout must be as long as enemy border transition time

		if (this.state.enemyCurHealth + modification <= 0) {
			this.setState({
				enemyCurHealth: 0
			});
			this.onDeath();
		} else {
			this.setState({
				enemyCurHealth: this.state.enemyCurHealth + modification
			});
			this.onHit();
		}
	}
	change_player_health(modification) {
		this.setState({
			playerSpecial: this.state.playerSpecial + 20
		});
		document.getElementById('player').style.backgroundColor = 'red';
		setTimeout(() => {
			document.getElementById('player').style.backgroundColor = '#282c34';
		}, 250); // Timeout must be as long as player border transition time
		if (this.state.playerCurHealth + modification <= 0) {
			this.setState({
				playerCurHealth: 0
			});
			this.onDeath();
		} else {
			this.setState({
				playerCurHealth: this.state.playerCurHealth + modification
			});
			this.onHit();
		}
	}
	usePlayerSpecial() {
		if (this.state.playerSpecial >= 125) {
			this.change_enemy_health(-200);
			this.setState({
				playerSpecial: 0
			});
		}
	}
	useEnemySpecial() {
		if (this.state.enemySpecial >= 125) {
			this.change_player_health(-200);
			this.setState({
				enemySpecial: 0
			});
		}
	}
	chargeSpecial() {
		return 125;
	}
	render() {
		const enemyCurHealth = this.state.enemyCurHealth;
		const enemyMaxHealth = this.state.enemyMaxHealth;
		const enemySpecial = this.state.enemySpecial;
		const playerCurHealth = this.state.playerCurHealth;
		const playerMaxHealth = this.state.playerMaxHealth;
		const playerSpecial = this.state.playerSpecial;
		return (
			<div>
				<div id="enemy" className="area">
					<Player
						name="enemy"
						curHealth={enemyCurHealth}
						maxHealth={enemyMaxHealth}
						sprite={steak}
						special={enemySpecial}
					/>
				</div>
				<div id="prompt-holder">
					<div id="key-prompt">
						<KeyPrompt
							changeEnemyHealth={this.change_enemy_health}
							changePlayerHealth={this.change_player_health}
							enemyCurHealth={enemyCurHealth}
							playerCurHealth={playerCurHealth}
							usePlayerSpecial={this.usePlayerSpecial}
							useEnemySpecial={this.useEnemySpecial}
							enemySpecial={enemySpecial}
						/>
					</div>
				</div>
				<div id="player" className="area">
					<Player
						name="player"
						curHealth={playerCurHealth}
						maxHealth={playerMaxHealth}
						sprite={pizza}
						special={playerSpecial}
					/>
				</div>
			</div>
		);
	}
}

export default PracticeMode;
