import React, {useContext} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"

export const Home = () => {
	const { store, actions} = useContext(Context)
	console.log({
		next: store.next,
		previous: store.previous,
		results: store.results,
		total_pages: store.total_pages
	})
	return(
	<div className="text-center mt-5">
		
	</div>
)};
