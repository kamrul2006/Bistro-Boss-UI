import React, {  useState } from 'react';
import HeadingTitle from '../Share/HeadingTitle';
import { Link, useLoaderData } from 'react-router-dom';

const HomeMenu = () => {
    const data = useLoaderData()

    const [menus, setMenu] = useState(data)




    return (
        <div className='m-20'>

            <HeadingTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check It Out'} />

            <div className='grid grid-cols-2 gap-7'>
                {menus.filter(item => item.category == 'popular').map(menu => <div key={menu._id} className='flex items-center gap-4 border-y-2 px-5 py-2' >

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
                <Link to={'/menu'}>
                    <button className='btn btn-outline rounded-full shadow-md shadow-black'> See All Menu</button>
                </Link>
            </div>

        </div>
    );
};

export default HomeMenu;