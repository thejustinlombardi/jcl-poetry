import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route></Route>
			</Routes>
		</div>
	);
}

export default App;
