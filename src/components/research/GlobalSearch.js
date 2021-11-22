import "./GlobalSearch.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function GlobalSearch() {
    //récupération des données de SWAPI
    let [data, setData] = useState([]);
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("https://www.swapi.tech/api/people/")
            .then(function (response) {
                setData(response.data.results);
                console.log(response.data);
                setIsLoaded(true);
            })
            .catch(function (error) {
                setError(error);
            });
    }, []);
    if (error) {
        return (
            <div className="alert alert-danger">
                Une erreur est survenue le chargement a échoué : {error.message}
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="alert alert-dark ">
                Chargement des Categories . . .
            </div>
        );
    }

    function handlePrev() {}

    function handleNext() {}

    return (
        <div className="d-flex justify-content-center align-items-center">
            <button onClick={handlePrev} className="col-lg-1 py-lg-2 fs-lg-1">
                {"<<<"}
            </button>
            <div className="d-flex flex-wrap col-8 justify-content-center mt-md-4">
                {data.map((x) => (
                    
                    <ul className="d-flex flex-column align-items-center col-5 m-1 p-0 col-md-5 m-md-2 p-md-3 alert-dark">
                        <li key={x.name}>Nom : {x.name}</li>
                        {console.log("test",x.name)}
                        <li key={x.uid}>Id : {x.uid}</li>
                    </ul>
                ))}
            </div>
            <button onClick={handleNext} className="col-lg-1 py-lg-2 fs-lg-1">
                {">>>"}
            </button>
        </div>
    );
}

export default GlobalSearch;
