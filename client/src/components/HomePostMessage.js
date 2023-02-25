import React, { useState, useRef } from 'react';
import axios from 'axios';
import Avi from '../assets/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

//component qui permet d'écrire un nouveau post accompagné d'une image ou non

const HomePostMessage = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const content = useRef()
    // const { user } = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
    const [count, setCount] = useState(0)

    // fonction qui va nous permettre d'ajouter une image a notre champs afin de l'envoyer plus tard dans la base de donnée 
    const OnImageChange = (e) => {
        if (e.target && e.target.files[0]) {
            let image = e.target.files[0];
            setImage(image)
            console.log(e.target.files);
        }
    }

    // fonction pour reset le champs apres avoir envoyé le post
    const reset = () => {
        setImage(null);
        content.current.value = ''
    }


    // fontion qui va nous permettre d'envoyer les données du post dans la base de donnée afin de les récupérer et de les afficher sur la timeline principale du site
    const postHandleOnClick = (e) => {
        e.preventDefault();
        // postData qui contient la valeur de notre input ainsi que les files s'il y en a
        const postData = {
            content: content.current.value,
            image: image
        };
        console.log(postData);
        const Posts = []

        if (postData.content.trim() === '') return
        const formData = new FormData()
        formData.append("content", postData.content)
        if (image) {
            formData.append("imageUrl", postData.image)
        }

        axios.post('http://localhost:3001/api/post/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                Posts.push(res.data);
                reset()
                console.log(res.data);
                window.location.reload(true);
            })
            .catch((err) => {
                console.log("Server response: ", err)
            })

    }



    return (
        <form encType="multipart/form-data" className='postMessage modalPostMessage'>
            <img className='postMessage__avi' src={Avi} alt='' />
            <div className='input--flex'>
                <textarea
                    className='postMessage__input'
                    type='text'
                    placeholder='Quoi de neuf?'
                    ref={content}
                    required
                    onChange={e => setCount(e.target.value.length)}
                    maxLength='280'
                />
                <p className={count >= 200 ? 'count200' : "count"}>{count}/280</p>
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
                        name='imageUrl'
                        onChange={OnImageChange}
                        ref={imageRef}
                    />
                </div>
            </div>
        </form>
    );
};

export default HomePostMessage;