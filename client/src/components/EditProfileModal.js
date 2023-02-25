import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import EditProfile from './EditProfile';

//component qui gere le modal pour l'edit profile de l'user 

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
                <EditProfile />
            </div>
        </div>
    );
};

export default PublishModal;