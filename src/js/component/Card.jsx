import React, {useContext} from "react"
import { Link } from "react-router-dom"
import {Context} from "../store/appContext.js"


export const CharacterCard = () => {
    const {store, actions} = useContext(Context)
    

    return(
        <>
        {store.results && store.results.map((item, index) => {
            return(
                <div key={index} className="card col-6 m-1" style={{width: "18rem"}}>
                    <img src={store.img+item.uid+".jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="d-flex justify-content-between">
                            <Link to={"/characaterCard/" + item.uid}>
                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    onClick={() => {
                                        actions.getCharactersInfo(item.uid)
                                }}>
                                    Learn More
                                </button>
                            </Link>
                            <input type="button" className="btn btn-check" id="favorite"/>
                            <label className={"btn btn-outline-secondary"} htmlFor="favorite"><i className="fas fa-heart"></i></label>
                        </div>
                        
                    </div>
                </div>
            )
        })}
        </>
        
    )
}

export const CharacterInfoCard = () => {
    const {store, actions} = useContext(Context)
    console.log(store.charactersInfo)
    return(
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            {store.characatersData? 
            <div className="row g-0">
                <div className="col-md-4">
                <img src={".jpg"} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Name: {store.charactersInfo.result.properties.name}</h5>
                        <p className="card-text">Description: {store.charactersInfo.result.description}</p>
                        <p className="card-text">Gender: {store.charactersInfo.result.properties.gender}</p>
                        <p className="card-text">Hair color: {store.charactersInfo.result.properties.hair-color}</p>
                        <p className="card-text">Eye color: {store.charactersInfo.result.properties.eye-color}</p>
                        <p className="card-text">Birth Year: {store.charactersInfo.result.properties.birth_year}</p>
                    </div>
                </div>
            </div>
            :
            ""
            }
        </div>
    )
        
}

const obj = {
    "message": "ok",
    "result": {
        "properties": {
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "created": "2022-04-12T10:48:49.437Z",
            "edited": "2022-04-12T10:48:49.437Z",
            "name": "Luke Skywalker",
            "homeworld": "https://www.swapi.tech/api/planets/1",
            "url": "https://www.swapi.tech/api/people/1"
        },
        "description": "A person within the Star Wars universe",
        "_id": "5f63a36eee9fd7000499be42",
        "uid": "1",
        "__v": 0
        }
}