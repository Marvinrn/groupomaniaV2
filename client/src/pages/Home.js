import React from 'react';
import HomePostMessage from '../components/HomePostMessage';
import HomeTopBar from '../components/HomeTopBar';

const Home = () => {
    return (
        <div className='home'>
            <HomeTopBar />
            <HomePostMessage />
        </div>
    );
};

export default Home;