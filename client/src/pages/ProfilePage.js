import React from 'react';
import HomeTopBar from '../components/HomeTopBar';
import HomeContent from '../components/HomeContent';
import PostMessageBtn from '../components/PostMessageBtn';
import Profile from '../components/Profile';

const ProfilePage = () => {
    return (
        <div className='profilePage'>
            <HomeTopBar />
            <Profile />
            <HomeContent />
            <PostMessageBtn />
        </div>
    );
};

export default ProfilePage;