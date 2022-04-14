import React, {useContext} from "react";
import "../../styles/home.css";
import { CharacterInfoCard } from "../component/Card.jsx";
import {Context} from "../store/appContext.js"


export const Character = () => {
	const { store, actions} = useContext(Context)
	return(
        <div className="container">
			<div className="justify-content-center row mt-5">
                <CharacterInfoCard/>
			</div>
		</div>
)};
