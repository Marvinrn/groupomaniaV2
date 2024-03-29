import React from 'react';
import { Link } from 'react-router-dom';
import GroupomaniaLogo from '../assets/icon-left-font-monochrome-white.svg'

// component classique qui va afficher la nav bar du site lors du login et du sign up

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={GroupomaniaLogo}
                alt="Logo groupomania" />
            <nav className="navbar__nav">
                <Link to='/' className="navbar__link"> S'inscrire </Link>
                <Link to='/Login' className="navbar__link"> S'identifier </Link>
            </nav>
        </div>
    );
};

export default NavBar;