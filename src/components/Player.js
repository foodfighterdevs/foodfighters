import React from "react";
import Bar from "./HealthBar.js";
import SpecialBar from "./SpecialBar";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  render() {
    return (
      <div>
        <Bar
          curHealth={this.props.curHealth}
          maxHealth={this.props.maxHealth}
        />
        <Image sprite={this.props.sprite} />
        <SpecialBar special={this.props.special} />
      </div>
    );
  }
}

function Image(props) {
  //let effect = ""

  return <img src={props.sprite} alt="Your Dish!" />;
}

export default Player;
