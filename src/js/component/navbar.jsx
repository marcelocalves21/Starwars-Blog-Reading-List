import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown" style={{width: "250px"}}>
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
							Dropdown button
						</button>
						<ul className="dropdown-menu">
							{store.favorites && store.favorites.map((item, index) => {
								return(
									<li key={index} className="d-flex justify-content-between" style={{width: "250px"}}>
										<Link to={"/characater/" + item.uid}>
											<p
												className="dropdown-item" 
												onClick={() => {
													actions.getCharactersInfo(item.uid)
												}}>
													{item.name}
											</p>
										</Link>
											<button 
												className="btn btn-danger"
												onClick={() => {
													actions.deleteFavorites(item)
												}}>
													<i className="fas fa-trash-alt"></i>
											</button>
										
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
