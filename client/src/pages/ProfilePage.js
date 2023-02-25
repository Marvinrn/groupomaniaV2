import React from 'react';
import HomeTopBar from '../components/HomeTopBar';
import HomeContent from '../components/HomeContent';
import PostMessageBtn from '../components/PostMessageBtn';
import Profile from '../components/Profile';
import EditProfileBtn from '../components/EditProfileBtn';


const ProfilePage = () => {
    return (
        <div className='profilePage'>
            <HomeTopBar />
            <Profile />
            <HomeContent />
            <PostMessageBtn />
            <EditProfileBtn />
        </div>
    );
};

export default ProfilePage;