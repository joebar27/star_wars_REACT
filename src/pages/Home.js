import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
    let [categories, setCategories] = useState([]);
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api")
            .then(function (response) {
                setCategories(response.data);
                setIsLoaded(true);
            })
            .catch(function (error) {
                setError(error);
            });
    }, []);

    console.log(categories);
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

    function cat() {
        const categorie = cat;
        for (const cat in categories) {
            console.log(cat);
        }
    }
    
    return (
        <section className="d-flex flex-wrap justify-content-center align-items-center">
            <h2>
                Selectionnez la catégorie sur laquel vous voulez en savoir plus:
            </h2>
            <div>{categorie}</div>
        </section>
    );
}

export default Home;
