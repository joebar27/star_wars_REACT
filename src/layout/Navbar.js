import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
        <ul className="d-flex ">
            <li className="mx-3">
                <Link to="/">Acceuil</Link>
            </li>
            <li className="mx-3">
                <Link to="/reseach">Recherche</Link>
            </li>
        </ul>
    )
}

export default Navbar
