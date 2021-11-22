import "./Home.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

import Categorie from "../components/categorie/Categorie";

function Home() {
    let [categories, setCategories] = useState([]);
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("https://www.swapi.tech/api/")
            .then(function (response) {
                setCategories(response.data.result);
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
        <section className="d-flex flex-wrap justify-content-center align-items-center">
            <h2 className="col-12 col-md-8 col-lg-6 text-align-center p-3 p-md-4 p-lg-2 mb-5 my-md-5">
                Voici les catégories sur lesquels vous pouvez en savoir plus :
            </h2>
            <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
                {Object.keys(categories).map((categorie, i) => (
                    <Categorie key={i} cat={categorie} />
                ))}
            </div>
        </section>
    );
}

export default Home;
