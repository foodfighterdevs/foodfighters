import React from "react";
import "./App.css";
import PracticeMode from "./PracticeMode";

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
				<PracticeMode />
			</header>
		</div>
	);
}

export default App;