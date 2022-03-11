import { Link } from "react-router-dom";

import styles from "./Welcome.module.css";
import backgroundVideo from "../../assets/Poems.mp4";

function Welcome() {
	return (
		<div className={styles.welcome_container}>
			<div className={styles.good_video_container}>
				<video autoPlay loop muted id="video" className={styles.good_video}>
					<source src={backgroundVideo} type="video/mp4" />
				</video>
				<Link to="/home" className={styles.logo}>
					<div>See what she is..</div>
				</Link>
			</div>
		</div>
	);
}

export default Welcome;
