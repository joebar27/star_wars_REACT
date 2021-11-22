import axios from "axios";
import React, { useEffect, useState } from "react";
import People from "../categorie/People";

function SearchForm() {
    //capture des entrées utilisateur
    let [research, setResearch] = useState("1");
    const [id, setId] = useState("1");

    //récupération des données de SWAPI
    const [data, setData] = useState([]);
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);

    //récupération de l'Url et Nom de la planete ou vie le personnage
    let [urlPlanet, setUrlPlanet] = useState("");
    const [planet, setPlanet] = useState();

    useEffect(() => {
        //recupération du personnage choisi
        axios
            .get("https://www.swapi.tech/api/people/" + id)
            .then(function (response) {
                setData(response.data.result.properties);
                setUrlPlanet(response.data.result.properties.homeworld)
                setIsLoaded(true);
            })
            .catch(function (error) {
                setError(error);
            });

        //recupération du nom de la planete ou vie le personnage
        axios
            .get(urlPlanet)
            .then(function (response) {
                setPlanet(response.data.result.properties.name);
                setIsLoaded(true);
            })
            // .catch(function (error) {
            //     setError(error);
            // });
    }, [id, urlPlanet]);

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

    function handleChange(e) {
        setResearch(e.target.value);
    }

    function handleSubmit(e) {
        setId(research);
        e.preventDefault();
    }

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={research}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Rechercher" />
            </form>
            <People search={true} data={data} planete={planet} />
        </div>
    );
}

export default SearchForm;
