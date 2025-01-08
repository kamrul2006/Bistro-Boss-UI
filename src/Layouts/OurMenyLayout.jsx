import React from 'react';
import MenuBanner from '../Components/OurMenu/MenuBanner';
import TodaysOffer from '../Components/OurMenu/TodaysOffer';
import DESSERTS from '../Components/OurMenu/DESSERTS';

const OurMenyLayout = () => {
    return (
        <div className=''>

            <MenuBanner />

            <TodaysOffer />

            <DESSERTS />

        </div>
    );
};

export default OurMenyLayout;