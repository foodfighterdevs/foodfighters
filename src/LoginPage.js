import React from "react";
import "./LoginPage.css";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { something: null };
	}
	render() {
		return (
			<div id="user-login">
				<div id="email-holder">
					<div id="email-descriptor">Email</div>
					<input id="email-box"></input>
				</div>
				<div id="password-holder">
					<div id="password-descriptor">Password</div>
					<input type="password" id="password-box" input></input>
				</div>
				<div id="register-login-container">
					<a id="register-link" href="http://google.com">
						Register?
					</a>
					<button id="login-button">Login</button>
				</div>
			</div>
		);
	}
}

export default LoginPage;
