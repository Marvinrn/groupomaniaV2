import React, { useState } from 'react';
import PublishModal from './PublishModal';

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