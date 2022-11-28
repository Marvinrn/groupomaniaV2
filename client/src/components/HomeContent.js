import React from 'react';
import Avi from '../assets/icon.png'
import postPicture from '../assets/bebou.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const HomeContent = () => {
    return (
        <div className='content'>
            <div className='user--flex'>
                <img src={Avi} alt='' className='user__avi' />
                <h2 className='user__name'> adresse mail de l'utilisateur </h2>
            </div>
            <p className='content__text'> Ceci est le contenu du post</p>
            <img src={postPicture} alt='' className='content__img' />
            <div className='like__section'>
                <p><FontAwesomeIcon icon={faHeart} className='like__btn' /> 8 </p>
                <button className='btnIsVisible' >Supprimer</button>
            </div>
        </div>
    );
};

export default HomeContent;