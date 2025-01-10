import React, { useEffect } from 'react';
import MenuBanner from '../Components/OurMenu/MenuBanner';
import TodaysOffer from '../Components/OurMenu/TodaysOffer';
import MenuSubBanner from '../Components/Share/MenuSubBanner';
import dbg from "../assets/menu/dessert-bg.jpeg"
import pbg from "../assets/menu/pizza-bg.jpg"
import sbg from "../assets/menu/salad-bg.jpg"
import obg from "../assets/menu/soup-bg.jpg"


const OurMenyLayout = () => {

    useEffect(() => {
        document.title = "BISTROBoss || Menu"
    }, [])


    return (
        <div className=''>

            <MenuBanner />

            <TodaysOffer />

            {/* -------------------DESSERTS--------------------- */}
            <MenuSubBanner
                heading={"DESSERTS"}
                subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                bg={dbg}
                cate={'dessert'} />

            {/* -------------------PIZZA--------------------- */}
            <MenuSubBanner
                heading={"PIZZA"}
                subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                bg={pbg}
                cate={'pizza'} />

            {/* -------------------SALADS--------------------- */}
            <MenuSubBanner
                heading={"SALADS"}
                subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                bg={sbg}
                cate={'salad'} />

            {/* -------------------SOUPS--------------------- */}
            <MenuSubBanner
                heading={"SOUPS"}
                subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                bg={obg}
                cate={'soup'} />

        </div>
    );
};


export default OurMenyLayout;