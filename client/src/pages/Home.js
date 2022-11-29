import React from 'react';
import HomeContent from '../components/HomeContent';
import HomePostMessage from '../components/HomePostMessage';
import HomeTopBar from '../components/HomeTopBar';
import PostMessageBtn from '../components/PostMessageBtn';

const Home = () => {
    return (
        <div className='home'>
            <HomeTopBar />
            <HomePostMessage />
            <HomeContent />
            <PostMessageBtn />
        </div>
    );
};

export default Home;