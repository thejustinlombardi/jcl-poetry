import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./LovePoem.module.css";

function LovePoems() {
	const [lovePoem, setLovePoem] = useState([]);

	const getLovePoems = async () => {
		try {
			const res = await axios.get(`https://rocky-plains-39336.herokuapp.com/`);
			// filter through frontend because we didn't know how to filter with nested username in owner property on backend
			const data = res.data.filter((el) => el.theme === "love");
			setLovePoem(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLovePoems();
	}, []);

	return (
		<div className={styles.poem_container}>
			{lovePoem.map((poem, idx) => {
				return (
					<div>
						<h2>{poem.title}</h2>
						<div>
							{poem.poem.map((line) => {
								console.log(line);
								return <p>{line}</p>;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default LovePoems;
