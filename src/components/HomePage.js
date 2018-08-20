import React from 'react';
import HomeSlider from '../components/HomeSlider';
import HomeBio from '../components/HomeBio';
import TopNav from '../layout/TopNav';


const HomePage = () => (
    <div>
        <TopNav />
        <HomeSlider />
        <HomeBio />
    </div>
);
export default HomePage