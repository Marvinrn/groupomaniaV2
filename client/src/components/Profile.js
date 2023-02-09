import React from 'react';
import Avi from '../assets/icon.png';
import EditProfileBtn from '../components/EditProfileBtn';


const Profile = () => {
    return (
        <div className='profile'>
            <EditProfileBtn className='profile__editBtn' />
            <img src={Avi} alt='' className='profile__avi' />
            <h1 className='profile__name'>marvinnrn@gmail.com</h1>
            <p className='profile__bio'>JoJo's Stan 🍋🇲🇱🇵🇹 Oden KOZUKI, Arataka Reigen et JP Polnareff sont les plus grands personnages de tout les temps !</p>
        </div>
    );
};

export default Profile;