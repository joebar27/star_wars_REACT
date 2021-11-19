import React from "react";
import Research from "../../pages/Research";

function Categorie(props) {
    
    function ResearchCat() {

    }
    return (
        <div className="col-3 border m-3 p-2 alert-dark" onClick={ResearchCat}>
            <h3>{props.categorie}</h3>
        </div>
    );
}

export default Categorie;
