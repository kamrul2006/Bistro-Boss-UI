import React from 'react';
import Banner from '../Components/Home/Banner';
import SwiperHome from '../Components/Home/SwiperHome';
import BitroBoss from '../Components/Home/BitroBoss';
import HomeMenu from '../Components/Home/HomeMenu';

const HomeLayout = () => {
    return (
        <div>

            <Banner />

            <SwiperHome/>

            <BitroBoss/>

            <HomeMenu/>


        </div>
    );
};

export default HomeLayout;