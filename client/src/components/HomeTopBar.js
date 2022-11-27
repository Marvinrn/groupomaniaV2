import React from 'react';
import GroupomaniaLogo from '../assets/icon-left-font-monochrome-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HomeTopBar = () => {
    return (
        <div className="topBar">
            <img className="topBar__logo" src={GroupomaniaLogo}
                alt="Logo groupomania" />
            <input
                className='topBar__search'
                type="text"
                name='search'
                placeholder='Recherche'
            />
            <nav className="topBar__nav">
                <a href='/home' className="topBar__link">
                    <FontAwesomeIcon className='topBar__icon' icon={faHouse} />
                </a>

                <a href='/home' className="topBar__link">
                    <FontAwesomeIcon className='topBar__icon' icon={faUser} />
                </a>

                <a href='/home' className="topBar__link">
                    <FontAwesomeIcon className='topBar__icon' icon={faBars} />
                </a>

            </nav>
        </div>
    );
};

export default HomeTopBar;