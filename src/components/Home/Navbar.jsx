import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-[#d22871] text-gray-100 p-3">
            <h1 className="text-2xl">Akassa School of Technology</h1>
            <ul className="flex gap-5">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/formations">Formations</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/inscription">S'inscrire</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
