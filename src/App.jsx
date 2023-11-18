import { useState, useEffect } from "react";
import "./App.css";

import api from "../api";

function App() {
	const [img, setImg] = useState(0);
	useEffect(() => {
		fetch(
			"https://api.giphy.com/v1/gifs/translate?api_key=" +
				api.key +
				"&s=cats",
			{ mode: "cors" }
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				setImg(response.data.images.original.url);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	return <>
    <img src={img} alt="cat idk" />
    </>;
}

export default App;
