import React, { useState, useRef } from 'react';
import axios from 'axios';
import Avi from '../assets/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const HomePostMessage = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const content = useRef()
    const { user } = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    const OnImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let image = e.target.files[0];
            setImage(image)
        }
    }

    console.log(user.userId);

    const reset = () => {
        setImage(null);
        content.current.value = ''
    }

    const postHandleOnClick = (e) => {
        e.preventDefault();
        const postData = {
            content: content.current.value,
            imageUrl: imageRef.current.value
        };
        console.log(postData);
        const Posts = []

        if (postData.content.trim() === '') return
        const formData = new FormData()
        formData.append("content", postData.content)
        if (postData.imageUrl !== "") {
            formData.append("imageUrl", postData.imageUrl)
        }

        axios.post('http://localhost:3001/api/post/', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                Posts.push(res.data);
                reset()
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Server response: ", err)
            })

    }


    return (
        <div className='postMessage modalPostMessage'>
            <img className='postMessage__avi' src={Avi} alt='' />
            <div className='input--flex'>
                <textarea
                    className='postMessage__input'
                    type='text'
                    placeholder='Quoi de neuf?'
                    ref={content}
                    required
                // onChange={""}
                />
                {image && (
                    <div className='previewImg'>
                        <FontAwesomeIcon onClick={() => setImage(null)} className='previewImg__icon' icon={faXmark} />
                        <img src={URL.createObjectURL(image)} alt='' />
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
                    <button className='postMessage__btn' onClick={postHandleOnClick}>
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