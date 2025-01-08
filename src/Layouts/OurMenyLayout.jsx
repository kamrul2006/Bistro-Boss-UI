import React from 'react';
import MenuBanner from '../Components/OurMenu/MenuBanner';
import TodaysOffer from '../Components/OurMenu/TodaysOffer';
import DESSERTS from '../Components/OurMenu/DESSERTS';
import PIZZA from '../Components/OurMenu/PIZZA';

const OurMenyLayout = () => {
    return (
        <div className=''>

            <MenuBanner />

            <TodaysOffer />

            <DESSERTS />

            <PIZZA />

        </div>
    );
};

export default OurMenyLayout;