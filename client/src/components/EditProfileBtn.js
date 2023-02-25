import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

//component qui affiche le bouton pour le modal edit profile

const EditProfileBtn = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <div className='edit__btn'>
                <FontAwesomeIcon icon={faPenToSquare} className='profile__editBtn' onClick={() => { setModalIsOpen(true) }} />
            </div>
            <div>
                {/* si modalIsOpen = true alors on render le component Modal */}
                {modalIsOpen && <EditProfileModal modalIsClose={setModalIsOpen} />}
            </div>

        </div>
    );
};

export default EditProfileBtn;