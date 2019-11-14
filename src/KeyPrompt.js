import React from "react";
import swal from "sweetalert";
class KeyPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letterArray: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ],
      letterShown: "3",
      enemy_move: null
    };
  }
  componentDidMount() {
    // Starts the first countdown prompt
    this.countdown();
  }
  countdown() {
    this.setState({ letterShown: "3" });
    setTimeout(() => {
      this.setState({ letterShown: "2" });
      setTimeout(() => {
        this.setState({ letterShown: "1" });
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
  checkIfPlayerWon() {
    if (this.props.enemyCurHealth !== 0) {
      this.countdown();
    } else {
      setTimeout(() => {
        swal({
          title: "You have won! :)",
          icon: "success",
          animation: true,
          customClass: {
            popup: "animated tada"
          }
        });
      }, 3000); // Based on health-bar-red css transition time
    }
    clearTimeout(this.state.enemy_move);
  }
  handle_player_prompt_press(e) {
    if (e.key.match(/[a-z]/i) && this.props.playerCurHealth > 0) {
      // Happens to be secure against users matching countdown numbers
      if (e.key === this.state.letterShown.toUpperCase()) {
        this.props.usePlayerSpecial();
        this.checkIfPlayerWon();
      } else if (
        e.key === this.state.letterShown &&
        this.props.enemyCurHealth !== 0
      ) {
        this.props.changeEnemyHealth(-50);
        this.checkIfPlayerWon();
      }
    }
  }
  handle_enemy_prompt_press() {
    this.setState({
      enemy_move: setTimeout(() => {
        if (this.props.enemySpecial >= 125) {
          this.props.useEnemySpecial();
        } else {
          this.props.changePlayerHealth(-50);
        }
        if (this.props.playerCurHealth !== 0) {
          this.countdown();
        } else {
          setTimeout(() => {
            swal({
              title: "You have lost! :(",
              icon: "error",
              animation: true,
              customClass: {
                popup: "animated tada"
              }
            });
          }, 3000); // Based on health-bar-red css transition time
        }
      }, Math.floor(Math.random() * 1000) + 500) // 0.5 second to 1.5 seconds
    });
  }
  render() {
    return (
      <div>
        {this.state.letterShown.toUpperCase()}
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
