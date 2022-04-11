import React, {useContext} from "react"
import Context from "../store/appContext.js"


export const CharacterCard = ({results}) => {
    const img = "https://starwars-visualguide.com/assets/img/characters/"
    return(
        <>
        {results && results.map((item, index) => {
            return(
                <div key={index} className="card col-6 m-1" style={{width: "18rem"}}>
                    <img src={img+item.uid+".jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-between">
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            <input href="#" className="btn btn-check" id="favorite"/>
                            <label className={"btn btn-outline-secondary"} htmlFor="favorite"><i className="fas fa-heart"></i></label>
                        </div>
                        
                    </div>
                </div>
            )
        })}
        s
        </>
        
    )
}