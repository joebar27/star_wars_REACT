import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResult from "../research/SearchResult";

function People(props) {
    const url = "https://swapi.dev/api/people/";
    let [categorie, setCategorie] = useState(props.categorie);
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    console.log(props.id);

    useEffect(() => {
        axios
            .get(url)
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
            <h1>page des peoples</h1>
            {/* <SearchResult id={props.id} /> */}
        </div>
    );
}

export default People;
