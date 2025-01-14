import React, { useEffect, useState } from 'react';
import HeadingTitle from '../Share/HeadingTitle';
import { Link, useLoaderData } from 'react-router-dom';

const TodaysOffer = () => {
    const data=useLoaderData()

    const [menus, setMenu] = useState(data)

    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => setMenu(data))
    // }, [])

    // console.log(menu)

    return (
        <div className='my-20'>

            <HeadingTitle
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"} />

            <div className='grid grid-cols-2 gap-7 mx-20'>
                {menus.filter(item => item.category == 'offered').map(menu => <div key={menu._id} className='flex items-center gap-4 border-y-2 px-5 py-2' >

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
                <Link to={'/ourShop/salad'}>
                    <button className='btn btn-outline rounded-full shadow-md shadow-black'> ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>

        </div>
    );
};

export default TodaysOffer;