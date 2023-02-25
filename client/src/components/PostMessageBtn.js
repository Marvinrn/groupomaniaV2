import React, { useState } from 'react';
import PublishModal from './PublishModal';

//component qui affiche le bouton pour le modal pour poster un message lorsque l'on a scroll pour éviter de remonter toute la timeline

const PostMessageBtn = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <div className='publish__btn'>
                <button onClick={() => { setModalIsOpen(true) }}>
                    Publier
                </button>
            </div>
            <div>
                {/* si modalIsOpen = true alors on render le component Modal */}
                {modalIsOpen && <PublishModal modalIsClose={setModalIsOpen} />}
            </div>

        </div>
    );
};

export default PostMessageBtn;