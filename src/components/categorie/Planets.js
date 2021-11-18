import axios from "axios";
import React, { useEffect, useState } from "react";

function Planets() {
    const [planets, setPlanets] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("https://swapi.dev/api/").then(function (response) {
            setPlanets(response.data);
            setIsLoaded(true);
        });
    }, []);

    console.log("planets",planets);

    if (!isLoaded) {
        return <div className="alert alert-dark ">Chargement des Planets . . .</div>;
    }
    
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center border col-3">
            <h3>Les Planets</h3>
        </div>
    )
}

export default Planets
