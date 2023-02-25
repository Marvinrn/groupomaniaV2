import React, { useEffect, useRef } from 'react';
import HomePostMessage from './HomePostMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

//component qui gere le modal pour la publication de post

const PublishModal = ({ modalIsClose }) => {
    let modalRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!modalRef.current.contains(event.target)) {
                modalIsClose(false)
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })


    return (
        <div className='modal__background'>
            <div ref={modalRef} className='modal__container'>
                <FontAwesomeIcon className='modal__xmarkIcon' icon={faXmark} onClick={() => { modalIsClose(false) }} />
                <HomePostMessage className='modal__post' />
            </div>
        </div>
    );
};

export default PublishModal;