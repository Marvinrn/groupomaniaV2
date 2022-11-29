import React from 'react';
import Avi from '../assets/icon.png'
import postPicture from '../assets/bebou.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

const HomeContent = () => {
    return (
        <div className='content'>
            <div className='user--flex'>
                <img src={Avi} alt='' className='user__avi' />
                <h1 className='user__name'> adresse mail de l'utilisateur </h1>
            </div>
            <p className='content__text'> Ceci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du postCeci est le contenu du post</p>
            <img src={postPicture} alt='' className='content__img' />
            <div className='like__section'>
                <div className='post__btn'>
                    <p><FontAwesomeIcon icon={faHeart} className='post__like' /> 8 </p>
                    <p><FontAwesomeIcon icon={faComment} className='post__comment' /> 8 </p>
                </div>
                <button className='btnIsVisible' >Supprimer</button>
            </div>
        </div>
    );
};

export default HomeContent;