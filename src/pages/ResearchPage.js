import "./ResearchPage.css"
import React from "react";
import SearchForm from "../components/research/SearchForm";

function Research() {

    return (
        <div className=" d-flex flex-column col-12 justify-content-center align-items-center">
            <h2 className="my-3">
                Ici vous pouvez chercher par "ID" parmis la categorie : 
            </h2>
            {/* <p className="col-10 mt-3">
                Si vous n'avez pas choisi de categorie sur la page d'acceuil il
                vous faudra chercher parmis les catégories puis les IDs,
                contrairement si vous avez selectionné une catégorie sur la page
                d'acceuil vous n'avez besoin de rechercher que son ID
            </p> */}
            <SearchForm />
        </div>
    );
}

export default Research;
