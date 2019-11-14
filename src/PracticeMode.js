import React from "react";
import Player from "./components/Player.js";
import "./PracticeMode.css";
import KeyPrompt from "./KeyPrompt";
import pizza from "./images/pizza.png";
import steak from "./images/steak.png";
import audio from "./audio/audio.js";
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
    this.change_enemy_health = this.change_enemy_health.bind(this);
    this.change_player_health = this.change_player_health.bind(this);
    this.usePlayerSpecial = this.usePlayerSpecial.bind(this);
    this.useEnemySpecial = this.useEnemySpecial.bind(this);
  }

  change_enemy_health(modification) {
    this.setState({
      enemySpecial: this.state.enemySpecial + 20
    });
    document.getElementById("enemy").style.backgroundColor = "red";
    setTimeout(() => {
      document.getElementById("enemy").style.backgroundColor = "#282c34";
    }, 250); // Timeout must be as long as enemy border transition time

    if (this.state.enemyCurHealth + modification <= 0) {
      this.setState({
        enemyCurHealth: 0
      });
      audio.onDeath();
    } else {
      this.setState({
        enemyCurHealth: this.state.enemyCurHealth + modification
      });
      audio.onHit();
    }
  }
  change_player_health(modification) {
    this.setState({
      playerSpecial: this.state.playerSpecial + 20
    });
    document.getElementById("player").style.backgroundColor = "red";
    setTimeout(() => {
      document.getElementById("player").style.backgroundColor = "#282c34";
    }, 250); // Timeout must be as long as player border transition time
    if (this.state.playerCurHealth + modification <= 0) {
      this.setState({
        playerCurHealth: 0
      });
      audio.onDeath();
    } else {
      this.setState({
        playerCurHealth: this.state.playerCurHealth + modification
      });
      audio.onHit();
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
              playerSpecial={playerSpecial}
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
