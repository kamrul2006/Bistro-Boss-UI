import React, { useEffect, useState } from 'react';
import MenuSubBanner from '../Share/MenuSubBanner';
import bg from "../../assets/menu/dessert-bg.jpeg"

const DESSERTS = () => {

    const [menus, setMenu] = useState([])

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    // console.log(menu)

    return (
        <div>
            <MenuSubBanner
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"}
                bg={bg} />

            <div className='grid grid-cols-2 gap-7 mx-20 my-10'>
                {menus.filter(item => item.category == 'dessert').slice(0, 6).map(menu => <div key={menu._id} className='flex items-center gap-4 border-y-2 px-5 py-2' >

                    <img src={menu.image} className='w-28 h-24 rounded-e-full rounded-t-full' />

                    <div className='space-y-3'>
                        <h1 className="text-xl font-semibold font-serif">{menu.name} ---------------------</h1>
                        <p className='font-semibold text-gray-500'>
                            {menu.recipe}
                        </p>
                        <p className='text-orange-500 font-bold'>Price: ${menu.price}</p>
                    </div>

                </div>)}
            </div>

            <div className='text-center justify-center items-center flex my-10 '>
                <button className='btn btn-outline rounded-full shadow-md shadow-black'> ORDER YOUR FAVORITE FOOD</button>
            </div>


        </div>
    );
};

export default DESSERTS;
