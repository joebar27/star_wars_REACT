import "./Navbar.css"
import { NavLink } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
        <ul className="Navbar d-flex justify-content-center">
            <li className="mx-3">
                <NavLink className="Navbar" to="/">Acceuil</NavLink>
            </li>
            <li className="mx-3">
                <NavLink className="Navbar" to="/reseach">Recherche</NavLink>
            </li>
        </ul>
    )
}

export default Navbar
