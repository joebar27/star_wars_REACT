import "././style/Categorie.css";
import React from "react";
import { Link } from "react-router-dom";

function Categorie(props) {
    const categorie = props.cat;

    return (
        <div
            id={categorie}
            className="col-5 col-lg-3 border m-2 p-3 m-md-3 p-md-4 p-lg-5 bg-img"
        >
            <Link to={`/` + categorie}>
                <h3>{categorie.toUpperCase()}</h3>
            </Link>
        </div>
    );
}

export default Categorie;
