import React, { useState } from 'react';
import Avi from '../assets/icon.png'
import axios from 'axios';

const EditProfile = () => {
    // const [image, setImage] = useState(null)
    // const imageRef = useRef()
    const [count, setCount] = useState(0)
    const token = JSON.parse(localStorage.getItem('token'));
    const { user } = JSON.parse(localStorage.getItem('user'));
    const [bioData, setBio] = useState("")

    // const OnImageChange = (e) => {
    //     if (e.target && e.target.files[0]) {
    //         let image = e.target.files[0];
    //         setImage(image)
    //         console.log(e.target.files);
    //     }
    // }

    const updateBioOnClick = (e) => {
        e.preventDefault()

        axios.put('http://localhost:3001/api/auth/' + user.userId + '/bio', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            bio: bioData,
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Server response: ", err)
            })
    }

    const textAreaEvents = (e) => {
        setCount(e.target.value.length)
        setBio(e.target.value)
    }


    return (
        <form className='editProfile' onSubmit={updateBioOnClick}>
            <div className='editInput--flex'>
                {/* {imageRef.current ?
                    <img className='aviPlaceholder' src={URL.createObjectURL(image)} alt='' />
                    :
                    <img className='aviPlaceholder' src={Avi} alt='' onClick={() => imageRef.current.click()} />
                } */}
                <img className='aviPlaceholder' src={Avi} alt='' />
                {/* <div className='editProfile__img'>
                    <input
                        type='file'
                        name='imageUrl'
                        onChange={OnImageChange}
                        ref={imageRef}
                    />
                </div> */}
                <textarea
                    className='editProfile__input'
                    type='text'
                    value={bioData}
                    placeholder='Ecrivez votre bio'
                    onChange={(e) => textAreaEvents(e)}
                    maxLength={130}
                />
                <p className='count'> {count}/130</p>
                <button className='editProfile__btn' type='submit'>
                    Enregistrer
                </button>
            </div>
        </form>
    );
};

export default EditProfile;