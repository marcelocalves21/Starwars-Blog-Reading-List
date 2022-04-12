import React, {useContext} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
import { CharacterCard } from "../component/Card.jsx";

export const Home = () => {
	const { store, actions} = useContext(Context)
	console.log(store.getCharactersInfo)
	return(
		<div className="container">
			<div className="justify-content-center row mt-5">
				<CharacterCard results={store.results}/>
			</div>
			<button className="btn btn-danger" onClick={()=> actions.getCharactersInfo()}>Data</button>
		</div>
)};
