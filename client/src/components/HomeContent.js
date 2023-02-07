import React, { useEffect, useState } from 'react';
import Avi from '../assets/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios';



const HomeContent = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { user } = JSON.parse(localStorage.getItem('user'));
    const [posts, setPosts] = useState([])



    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchPosts = () => {
        axios.get('http://localhost:3001/api/post/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => { setPosts(res.data); console.log(res) })
            .catch((res) => {
                console.log(res)
            })
    }

    const handleOnDelete = (id) => {
        axios.delete('http://localhost:3001/api/post/' + id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res);
                fetchPosts()
            })
            .catch((err) => { console.log(err) })
    }



    // fonction pour ajouter un like au post
    const handleOnLike = (id) => {
        const data = {
            userId: user.userId,
            like: 1
        }
        axios.post('http://localhost:3001/api/post/' + id + '/like', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data);
                fetchPosts()
            })
            .catch((err) => { console.log(err) })

    }

    // fonction pour retirer un like au post
    const handleOnUnlike = (id) => {
        const data = {
            userId: user.userId,
            like: 0
        }
        axios.post('http://localhost:3001/api/post/' + id + '/like', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data);
                fetchPosts()
            })
            .catch((err) => { console.log(err) })

    }


    return (
        <article >
            {posts.map((post) => (
                <div key={post._id} className='content'>
                    <div className='user--flex'>
                        <img src={Avi} alt='' className='user__avi' />
                        <h1 className='user__name'>{post.email}</h1>
                    </div>
                    <p className='content__text'>{post.content}</p>
                    <img src={post.imageUrl} alt='' className='content__img' />
                    <div className='like__section'>
                        <div className='post__btn'>
                            {post.usersLiked.includes(user.userId) ?
                                <p><FontAwesomeIcon icon={faHeart} className={post.usersLiked.includes(user.userId) ? 'post__likeOnclick' : 'post__like'} onClick={() => { handleOnUnlike(post._id) }} /> {post.likes} </p>
                                :
                                <p><FontAwesomeIcon icon={faHeart} className='post__like' onClick={() => { handleOnLike(post._id) }} /> {post.likes} </p>
                            }
                            <p><FontAwesomeIcon icon={faComment} className='post__comment' /> 0 </p>
                        </div>
                        {/* <button className={post.userId === user.userId ? 'btnIsVisible' : 'btnIsNotVisible'} onClick={() => { handleOnDelete(post._id) }}>Supprimer</button> */}
                        <button className={post.userId === user.userId || user.role === true ? 'btnIsVisible' : 'btnIsNotVisible'} onClick={() => { handleOnDelete(post._id) }}>Supprimer</button>
                    </div>
                </div>
            ))}
        </article>
    );
};

export default HomeContent;