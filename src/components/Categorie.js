import React, { useEffect, useState } from "react";

function Categorie(props) {
    
    return (
        <div className="col-3">
            {props.categorie}
        </div>
    );
}

export default Categorie;
