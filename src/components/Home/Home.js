import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

function Home(props) {
	return (
		<div className={styles.daily_poem}>
			<Link to={"/love-poems"}>
				<div className={styles.img_links}>
					<img src="https://i.imgur.com/i9oXitV.png" alt="" />
				</div>
			</Link>
			<Link to={"/dark-poems"}>
				<div className={styles.img_links}>
					<img src="https://i.imgur.com/FrGFT8N.png" alt="" />
				</div>
			</Link>
			<Link to={"/misc-poems"}>
				<div className={styles.img_links}>
					<img src="https://i.imgur.com/FrGFT8N.png" alt="" />
				</div>
			</Link>
		</div>
	);
}

export default Home;
