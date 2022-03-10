import { Routes, Route, useLocation } from "react-router-dom";

import Welcome from "./components/Welcome/Welcome";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Poems from "./components/Poems/Poems";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const { pathname } = useLocation();
	return (
		<div>
			{pathname !== "/" && <Navigation />}
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="home" element={<Home />} />
				<Route path="poems" element={<Poems />} />
				<Route path="contact" element={<Contact />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
