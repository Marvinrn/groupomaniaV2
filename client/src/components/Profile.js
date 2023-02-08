import React from 'react';
import Avi from '../assets/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className='profile'>
            <FontAwesomeIcon icon={faPenToSquare} className='profile__editBtn' />
            <img src={Avi} alt='' className='profile__avi' />
            <h1 className='profile__name'>marvinnrn@gmail.com</h1>
            <p className='profile__bio'>JoJo's Stan 🍋🇲🇱🇵🇹 Oden KOZUKI, Arataka Reigen et JP Polnareff sont les plus grands personnages de tout les temps !</p>
        </div>
    );
};

export default Profile;