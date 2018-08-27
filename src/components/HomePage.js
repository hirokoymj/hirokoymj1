import React from 'react';
import HomeSlider from '../components/HomeSlider';
import HomeBio from '../components/HomeBio';
import TopNav from '../layout/TopNav';

const HomePage = (props) => (
    <div>
        <TopNav />
        <HomeSlider />
        <HomeBio />
    </div>
);
export default HomePage
