import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuSubBanner = ({ subHeading, heading, bg, cate }) => {

    // console.log(cate)

    const [menus, setMenu] = useState([])

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    // console.log(menu)

    return (
        <div>
            <div style={{ background: `url(${bg})` }} className='h-[400px] bg-contain bg-center mx-20 text-white flex items-center justify-center p-24 backdrop-blur-sm'>

                <div className='w-full h-full object-cover backdrop-blur-sm rounded-xl bg-black/50 flex items-center justify-center flex-col gap-4'>
                    <h1 className="text-3xl font-serif">{heading}</h1>
                    <p className='text-center text-sm px-20'>{subHeading}</p>

                </div>
            </div>
            <div>

                <div className='grid grid-cols-2 gap-7 mx-20 my-10'>
                    {menus.filter(item => item.category == `${cate}`).slice(0, 6).map(menu => <div key={menu._id} className='flex items-center gap-4 border-y-2 px-5 py-2' >

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
                    <Link to={'/ourShop'}>
                    <button className='btn btn-outline rounded-full shadow-md shadow-black'> ORDER YOUR FAVORITE FOOD</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default MenuSubBanner;