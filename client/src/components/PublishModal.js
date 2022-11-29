import React, { useEffect, useRef } from 'react';
import HomePostMessage from './HomePostMessage';


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
                <button onClick={() => { modalIsClose(false) }}> X </button>
                <HomePostMessage className='modal__post' />
            </div>
        </div>
    );
};

export default PublishModal;