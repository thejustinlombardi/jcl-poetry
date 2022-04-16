import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

function Home(props) {
	return (
		<div className={styles.daily_poem}>
			<Link to={"/love-poems"} className={styles.img_links}>
				<div>
					<img src="https://i.imgur.com/i9oXitV.png" alt="love-poems" />
					<h2 className={styles.love_text}>LOVE</h2>
				</div>
			</Link>
			<Link to={"/dark-poems"} className={styles.img_links}>
				<div>
					<img src="https://i.imgur.com/FrGFT8N.png" alt="" />
				</div>
			</Link>
			<Link to={"/misc-poems"} className={styles.img_links}>
				<div>
					<img src="https://i.imgur.com/FrGFT8N.png" alt="" />
				</div>
			</Link>
		</div>
	);
}

export default Home;
