import React, { useState, useEffect } from "react";
import axios from "axios";

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
		// set timeout for when there's nothing in the response to load the no posts element

		getLovePoems();
	}, []);

	return (
		<div>
			{lovePoem.map((poem, idx) => {
				poem.poem.map((line) => {
					return <p>{line}</p>;
				});
			})}
		</div>
	);
}

export default LovePoems;
