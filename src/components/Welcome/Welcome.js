import { Link } from "react-router-dom";

import styles from "./Welcome.module.css";

function Welcome() {
	return (
		<div className={styles.welcome_container}>
			<div className={styles.welcome_room}></div>
			<img
				className={styles.welcome_img}
				src="https://i.imgur.com/6hVEsYW.png"
				alt="logo"
			/>
			<Link to="home" className={styles.welcome_link}>
				Start reading
			</Link>
		</div>
	);
}

export default Welcome;
