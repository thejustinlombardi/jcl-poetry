import React from "react";

import styles from "./Home.module.css";

function Home(props) {
	return (
		<div className={styles.daily_poem}>
			{" "}
			<h2>Daily Find</h2>
			<p>I wrote something down, but then I erased it.</p>
			<p>I've done this about twenty times now. </p>
			<p>I had an idea, then I got overwhelmed by the voices in my head. </p>
			<p>They've been screaming; I'm being haunted.</p>
			<p>Most days I can shut them up, </p>
			<p>but today I can't. </p>
			<p>Some days I'm okay, </p>
			<p>but today I'm not.</p>
		</div>
	);
}

export default Home;
