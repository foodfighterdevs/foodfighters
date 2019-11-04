import React from "react";
import "./App.css";
import PracticeMode from "./PracticeMode";
import LoginPage from "./LoginPage";

import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App()
{
	return (
		<div className="App">
			<header className="App-header">
				{/* <PracticeMode /> */}
				<LoginPage />
			</header>
		</div>
	);
}

export default App;