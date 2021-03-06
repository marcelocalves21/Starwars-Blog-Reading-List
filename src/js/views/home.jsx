import React, {useContext} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
import { CharacterCard } from "../component/Card.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions} = useContext(Context)
	return(
		<div className="container">
			<div className="justify-content-center row mt-5">
				<CharacterCard />
			</div>
		</div>
)};
