import { useContext, useEffect, useState } from "react";
import HeadingTitle from "../Share/HeadingTitle";
import { useLoaderData, useNavigate, useRevalidator } from "react-router-dom";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import axiosSecure from "../../Hooks/axiosSecure";
import UseCarts from "../../Hooks/UseCarts";

const ShouldTry = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const axiosSecurity = axiosSecure()
    const [, refetch] = UseCarts()

    const [menus, setMenu] = useState(data)

    const { user } = useContext(AuthContext)


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
        <div className='m-20'>

            <HeadingTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={' Should Try '} />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {menus.filter(item => item.category == 'salad').slice(0, 3).map(menu => <div key={menu._id}>
                    <div className=" bg-base-100 shadow-md">
                        <figure>
                            <img
                                src={menu.image}
                                alt="item" />
                        </figure>
                        <div className="p-5 bg-gray-100">
                            <h2 className="text-xl font-semibold my-2 text-center">{menu.name}</h2>
                            <p>{menu.recipe}</p>
                            <div className="card-actions justify-center mt-5">
                                <button
                                    onClick={() => AddToCart(menu)}
                                    className="border-b-4 border-black px-5 py-2 rounded-full shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ShouldTry;