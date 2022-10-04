import React from 'react';
import { Link } from 'react-router-dom';
import GroupomaniaLogo from '../assets/icon-left-font-monochrome-white.svg'

const NavBar = () => {
    return (
        <div class="navbar">
            <img class="navbar__logo" src={GroupomaniaLogo}
                alt="Logo groupomania" />
            <nav class="navbar__nav">
                <Link to='/' class="navbar__link"> S'inscrire </Link>
                <Link to='/Login' class="navbar__link"> S'identifier </Link>
            </nav>
        </div>
    );
};

export default NavBar;