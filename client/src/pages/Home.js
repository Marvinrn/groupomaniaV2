import React from 'react';
import HomeContent from '../components/HomeContent';
import HomePostMessage from '../components/HomePostMessage';
import HomeTopBar from '../components/HomeTopBar';

const Home = () => {
    return (
        <div className='home'>
            <HomeTopBar />
            <HomePostMessage />
            <HomeContent />
        </div>
    );
};

export default Home;