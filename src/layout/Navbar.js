import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
        <ul className="d-flex">
            <li className="mx-3">
                <Link className="App-Navbar" to="/">Acceuil</Link>
            </li>
            <li className="mx-3">
                <Link className="App-Navbar" to="/reseach">Recherche</Link>
            </li>
        </ul>
    )
}

export default Navbar
