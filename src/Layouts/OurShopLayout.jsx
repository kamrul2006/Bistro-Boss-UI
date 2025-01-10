import React, { useEffect } from 'react';
import OurShopBanner from '../Our Shop/OurShopBanner';
import ShopOutlet from '../Our Shop/ShopOutlet';

const OurShop = () => {
    useEffect(() => {
        document.title = "BISTROBoss || Our Shop"
    }, [])

    return (
        <div className=''>

            <OurShopBanner />

            <ShopOutlet />

        </div>
    );
};

export default OurShop;