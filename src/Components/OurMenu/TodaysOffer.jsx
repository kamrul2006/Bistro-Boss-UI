import React, { useEffect, useState } from 'react';
import HeadingTitle from '../Share/HeadingTitle';

const TodaysOffer = () => {

    const [menus, setMenu] = useState([])

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

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

        </div>
    );
};

export default TodaysOffer;