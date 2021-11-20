import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchResult(props) {

    let [categorie, setCategorie] = useState(props.categorie);
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    console.log(props.id);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/")
            .then(function (response) {
                setCategorie(response.data);
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

    return (
        <div>            
            <li>{categorie.name}</li>            
            <li>{categorie.birth_year}</li>
            <li>{categorie.eye_color}</li>
            <li>{categorie.hair_color}</li>
            <li>{categorie.height }</li>
            <li>{categorie.mass }</li>
            <li>{categorie.skin_color }</li>
            <li>{categorie.homeworld }</li>
            {/* <li>{categorie.films }</li> */}
            {/* <li>{categorie.species }</li> */}
            {/* <li>{categorie.starships }</li> */}
            {/* <li>{categorie.vehicles }</li> */}
        </div>
    )
}

export default SearchResult;
