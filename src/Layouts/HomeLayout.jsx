import React, { useEffect } from 'react';
import Banner from '../Components/Home/Banner';
import SwiperHome from '../Components/Home/SwiperHome';
import BitroBoss from '../Components/Home/BitroBoss';
import HomeMenu from '../Components/Home/HomeMenu';
import ShouldTry from '../Components/Home/ShouldTry';
import Featured from '../Components/Home/Featured';
import TESTIMONIALS from '../Components/Home/TESTIMONIALS';

const HomeLayout = () => {

        useEffect(() => {
            document.title = "BISTROBoss || Home"
        }, [])
    

    return (
        <div>

            <Banner />

            <SwiperHome />

            <BitroBoss />

            <HomeMenu />

            {/* --------------------------call us section---------------------- */}
            <div className='p-20 text-center text-white text-4xl font-semibold bg-black mb-16 italic mx-16'>
                <h1>Call Us: +88 0192345678910</h1>
            </div>

            <ShouldTry />

            <Featured />

            <TESTIMONIALS />
        </div>
    );
};

export default HomeLayout;