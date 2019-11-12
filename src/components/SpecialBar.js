import React from 'react';
import './SpecialBar.css';

class SpecialBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds: null };
	}
	render() {
		let pixel_width = this.props.special;
		// Special is fully charged
		if (pixel_width >= 125) {
			pixel_width = 125;
		}
		let style = { width: pixel_width, transition: 'width 3s' };
		return (
			<div id="special-bar-holder">
				<div id="special-buildup" style={style}></div>
				<div id="special-thing">Special</div>
			</div>
		);
	}
}

export default SpecialBar;
