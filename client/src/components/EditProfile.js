import React, { useRef, useState } from 'react';
import Avi from '../assets/icon.png'
import axios from 'axios';

const EditProfile = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const bio = useRef()
    const [count, setCount] = useState(0)
    const token = JSON.parse(localStorage.getItem('token'));

    const OnImageChange = (e) => {
        if (e.target && e.target.files[0]) {
            let image = e.target.files[0];
            setImage(image)
            console.log(e.target.files);
        }
    }


    // const updateBioOnClick = (e, id) => {
    //     e.prevent.default()

    //     axios.put('http://localhost:3001/api/auth/' + id + '/bio', {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data);
    //             // window.location.reload(true);
    //         })
    //         .catch((err) => {
    //             console.log("Server response: ", err)
    //         })
    // }

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
                    ref={bio}
                    onChange={e => setCount(e.target.value.length)}
                    maxLength={130}
                />
                <p className='count'> {count}/130</p>
                <button className='editProfile__btn' >
                    Enregistrer
                </button>
            </div>
        </form>
    );
};

export default EditProfile;