import React, {useContext} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
import { CharacterCard } from "../component/Card.jsx";

export const Home = () => {
	const { store, actions} = useContext(Context)
	console.log(store.charactersInfo)
	return(
	<div className="d-flex justify-content-center row mt-5">
		<CharacterCard results={store.results}/>
	</div>
)};
