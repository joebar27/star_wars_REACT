import React from "react";
import { Link } from "react-router-dom";

function Categorie(props) {
    const categorie = props.cat;

    return (
        <div className="col-3 border m-3 p-5 alert-dark">
            <Link to={`/` + categorie}> <h3>{categorie.toUpperCase()}</h3> </Link>
            {/* <h3>{categorie.toUpperCase()}</h3> */}
        </div>
    );
}

export default Categorie;
