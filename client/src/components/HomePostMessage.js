import React, { useState, useRef } from 'react';
import Avi from '../assets/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const HomePostMessage = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()


    const OnImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imgage = e.target.files[0];
            setImage({
                image: URL.createObjectURL(imgage)
            })
        }
    }

    return (
        <div className='postMessage modalPostMessage'>
            <img className='postMessage__avi' src={Avi} alt='' />
            <div className='input--flex'>
                <textarea
                    className='postMessage__input'
                    type='text'
                    placeholder='Quoi de neuf?'
                />
                {image && (
                    <div className='previewImg'>
                        <FontAwesomeIcon onClick={() => setImage(null)} className='previewImg__icon' icon={faXmark} />
                        <img src={image.image} alt='' />
                    </div>
                )}
                <div className='postMessage__options'>
                    <div className='option' onClick={() => imageRef.current.click()}>
                        <FontAwesomeIcon className='option__icon' icon={faImage} />
                        <p>Photo / Video</p>
                    </div>
                    <div className='option'>
                        <p>GIF</p>
                    </div>
                    <button className='postMessage__btn'>
                        Publier
                    </button>
                </div>
                <div className='postMessage__img'>
                    <input
                        type='file'
                        name='myImage'
                        ref={imageRef}
                        onChange={OnImageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePostMessage;