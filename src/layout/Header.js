import "./Header.css"
import React from "react";

function Header() {
    return (
        <header className="header d-flex flex-column justify-content-center align-items-center">
            <h1 className="p-1">STARS WARS</h1>
            <p className="p-1">le site conçu par des Fans pour les Fans</p>
        </header>
    );
}

export default Header;
