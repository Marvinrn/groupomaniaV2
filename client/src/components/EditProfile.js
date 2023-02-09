import React, { useRef, useState } from 'react';
import Avi from '../assets/icon.png'

const EditProfile = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const [count, setCount] = useState(0)

    const OnImageChange = (e) => {
        if (e.target && e.target.files[0]) {
            let image = e.target.files[0];
            setImage(image)
            console.log(e.target.files);
        }
    }


    return (
        <form encType='multipart/form-data' className='editProfile'>
            <div className='editInput--flex'>
                {imageRef.current ?
                    <img className='aviPlaceholder' src={URL.createObjectURL(image)} alt='' />
                    :
                    <img className='aviPlaceholder' src={Avi} alt='' onClick={() => imageRef.current.click()} />
                }
                <div className='editProfile__img'>
                    <input
                        type='file'
                        name='imageUrl'
                        onChange={OnImageChange}
                        ref={imageRef}
                    />
                </div>
                <textarea
                    className='editProfile__input'
                    typeof='text'
                    placeholder='Ecrivez votre bio'
                    // ref={bio}
                    onChange={e => setCount(e.target.value.length)}
                    maxLength={130}
                />
                <p className='count'> {count}/130</p>
                <button className='editProfile__btn'>
                    Enregistrer
                </button>
            </div>
        </form>
    );
};

export default EditProfile;