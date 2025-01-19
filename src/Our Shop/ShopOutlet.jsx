import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axiosSecure from '../Hooks/axiosSecure';
import { AuthContext } from '../Authentication/Providers/AuthProvider';
import UseCarts from '../Hooks/UseCarts';
import Swal from 'sweetalert2';


const ShopOutlet = () => {

    const data = useLoaderData()

    const [menus, setMenu] = useState(data)

    const navigate = useNavigate()
    const axiosSecurity = axiosSecure()


    const { user } = useContext(AuthContext)

    const [, refetch] = UseCarts()

    const AddToCart = (e) => {
        if (user?.email) {
            const cartData = {
                name: e.name,
                category: e.category,
                price: e.price,
                image: e.image,
                addedBy: user.email
            }
            axiosSecurity.post('/carts', cartData)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${e.name} is Added To cart.`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })



            // console.log(cartData)
        }
        else {
            Swal.fire({
                title: "you are not logged in !",
                text: "For add this item to card you must login .",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                    // alert('hi')
                }
            });
        }
    }

    return (
        <div>
            <Tabs>
                <div className=" uppercase md:mx-36 text-xs md:text-base my-10 font-semibold">
                    {/* ----------------react-tab----- */}
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                        <Tab>Main Course</Tab>
                    </TabList>

                </div>



                {/* -----------salad--------------- */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 mx-20 my-10'>
                        {menus.filter(item => item.category == "salad").map(menu => <div key={menu._id} className='flex items-center gap-4px-5 py-2' >

                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <img
                                        src={menu.image}
                                        alt="food" />
                                    <p className='text-white bg-black absolute top-4 px-2 rounded-2xl right-2'>${menu.price}</p>
                                </figure>
                                <div className="card-body bg-gray-100">
                                    <h2 className="text-xl font-bold text-center">{menu.name}</h2>

                                    <p className='text-xs text-gray-400 h-[60px]'>{menu.recipe}</p>

                                    <div className="card-actions justify-center my-5">
                                        <button
                                            onClick={() => AddToCart(menu)}
                                            className="border-b-4 border-black px-5 py-2 rounded-xl shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>)}
                    </div>
                </TabPanel>

                {/* ----------------pizza------------ */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 mx-20 my-10'>
                        {menus.filter(item => item.category == "pizza").map(menu => <div key={menu._id} className='flex items-center gap-4px-5 py-2' >

                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <img
                                        src={menu.image}
                                        alt="food" />
                                    <p className='text-white bg-black absolute top-4 px-2 rounded-2xl right-2'>${menu.price}</p>

                                </figure>
                                <div className="card-body bg-gray-100">
                                    <h2 className="text-xl font-bold text-center">{menu.name}</h2>

                                    <p className='text-xs text-gray-400 h-[60px]'>{menu.recipe}</p>

                                    <div className="card-actions justify-center my-5">
                                        <button
                                            onClick={() => AddToCart(menu)}
                                            className="border-b-4 border-black px-5 py-2 rounded-xl shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>)}
                    </div>
                </TabPanel>

                {/* -------------------soup------------- */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 mx-20 my-10'>
                        {menus.filter(item => item.category == "soup").map(menu => <div key={menu._id} className='flex items-center gap-4px-5 py-2' >

                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <p className='text-white bg-black absolute top-4 px-2 rounded-2xl right-2'>${menu.price}</p>

                                    <img
                                        src={menu.image}
                                        alt="food" />
                                </figure>
                                <div className="card-body bg-gray-100">
                                    <h2 className="text-xl font-bold text-center">{menu.name}</h2>

                                    <p className='text-xs text-gray-400 h-[60px]'>{menu.recipe}</p>

                                    <div className="card-actions justify-center my-5">
                                        <button
                                            onClick={() => AddToCart(menu)}
                                            className="border-b-4 border-black px-5 py-2 rounded-xl shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>)}
                    </div>
                </TabPanel>

                {/* -------dessert----------- */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 mx-20 my-10'>
                        {menus.filter(item => item.category == "dessert").map(menu => <div key={menu._id} className='flex items-center gap-4px-5 py-2' >

                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <p className='text-white bg-black absolute top-4 px-2 rounded-2xl right-2'>${menu.price}</p>

                                    <img
                                        src={menu.image}
                                        alt="food" />
                                </figure>
                                <div className="card-body bg-gray-100">
                                    <h2 className="text-xl font-bold text-center">{menu.name}</h2>

                                    <p className='text-xs text-gray-400 h-[60px]'>{menu.recipe}</p>

                                    <div className="card-actions justify-center my-5">
                                        <button
                                            onClick={() => AddToCart(menu)}
                                            className="border-b-4 border-black px-5 py-2 rounded-xl shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>)}
                    </div>
                </TabPanel>

                {/* ----------------drinks-------- */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 mx-20 my-10'>
                        {menus.filter(item => item.category == "drinks").map(menu => <div key={menu._id} className='flex items-center gap-4px-5 py-2' >

                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <p className='text-white bg-black absolute top-4 px-2 rounded-2xl right-2'>${menu.price}</p>

                                    <img
                                        src={menu.image}
                                        alt="food" />
                                </figure>
                                <div className="card-body bg-gray-100">
                                    <h2 className="text-xl font-bold text-center">{menu.name}</h2>

                                    <p className='text-xs text-gray-400 h-[60px]'>{menu.recipe}</p>

                                    <div className="card-actions justify-center my-5">
                                        <button onClick={() => AddToCart(menu)}
                                            className="border-b-4 border-black px-5 py-2 rounded-xl shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>)}
                    </div>
                </TabPanel>

                {/* ----------------drinks-------- */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 mx-20 my-10'>
                        {menus.filter(item => item.category == "MainCourse").map(menu => <div key={menu._id} className='flex items-center gap-4px-5 py-2' >

                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <p className='text-white bg-black absolute top-4 px-2 rounded-2xl right-2'>${menu.price}</p>

                                    <img
                                        src={menu.image}
                                        alt="food" />
                                </figure>
                                <div className="card-body bg-gray-100">
                                    <h2 className="text-xl font-bold text-center">{menu.name}</h2>

                                    <p className='text-xs text-gray-400 h-[60px]'>{menu.recipe}</p>

                                    <div className="card-actions justify-center my-5">
                                        <button onClick={() => AddToCart(menu)}
                                            className="border-b-4 border-black px-5 py-2 rounded-xl shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>)}
                    </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default ShopOutlet;