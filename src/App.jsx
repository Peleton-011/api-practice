import { useState, useEffect } from "react";
import "./App.css";

import api from "../api";

function App() {
	const [search, setSearch] = useState("cats");
	const [img, setImg] = useState(0);
    const [error, setError] = useState(false);
	function fetchNew() {
		fetch(
			"https://api.giphy.com/v1/gifs/translate?api_key=" +
				api.key +
				"&s=" +
				search,
			{ mode: "cors" }
		)
			.then(function (response) {
                if(response.status === 200) setError(true)
				return response.json();
			})
			.then(function (response) {
				setImg(response.data.images.original.url);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	useEffect(() => {
		fetchNew();
	}, [search]);
	return (
		<>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						fetchNew();
					}
				}}
			/>
            {
                error?
                <img src={img} alt={search + " image"} />
                :
                <p>Error: {search} not found</p>
            }
		</>
	);
}

export default App;
