import React from "react";
import { FaTrash } from "react-icons/fa";
import UseCarts from "../../Hooks/UseCarts";
import Swal from "sweetalert2";
import axiosSecure from "../../Hooks/axiosSecure";
import no from "../../assets/dashboard/nofood.png"

const MyCarts = () => {
    const [cart, refetch] = UseCarts()
    const axiosSecurity = axiosSecure()

    const totalOrders = cart.length;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // 
                axiosSecurity.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            refetch()
                        }
                    });
            }
        });
    }

    return (
        <div className="max-w-4xl mx-auto mt-8 p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">TOTAL ORDERS: {totalOrders}</h1>
                <h1 className="text-xl font-semibold">TOTAL PRICE: ${totalPrice.toFixed(2)}</h1>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600">
                    PAY
                </button>
            </div>

            <div className="bg-yellow-500 text-white rounded-t-lg p-4 grid grid-cols-4 gap-4 text-left font-bold">
                <div>ITEM IMAGE</div>
                <div>ITEM NAME</div>
                <div>PRICE</div>
                <div>ACTION</div>
            </div>

            <div>
                {cart.length == 0 ? <div className="mx-auto text-center">
                    <p className="mt-10 text-3xl text-yellow-600 font-serif font-semibold">No Food Found</p>
                    <img src={no} className="mx-auto my-4 w-1/2" />

                </div> : <div>
                    {
                        cart.map((item, i) => (
                            <div
                                key={item._id}
                                className="grid grid-cols-4 gap-4 items-center p-4 border-b"
                            >

                                <div className="flex items-center justify-between">
                                    {i + 1}
                                    <img src={item.image ? item.image : "https://img.freepik.com/premium-vector/variety-food-including-variety-different-foods_1166763-16220.jpg"} className="w-16 h-16 bg-gray-300 rounded mx-auto" />
                                </div>

                                <div className="text-lg font-medium">{item.name}</div>

                                <div className="text-lg">${item.price.toFixed(2)}</div>

                                {/* -------delete button------------- */}
                                <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-green-700">
                                    <FaTrash size={20} />
                                </button>

                            </div>
                        ))
                    }</div>
                }
            </div>

        </div>
    );
};

export default MyCarts;
