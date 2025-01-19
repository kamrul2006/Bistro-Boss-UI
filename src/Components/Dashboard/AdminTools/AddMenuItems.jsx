import React from "react";
import { FiEdit3 } from "react-icons/fi";
import axiosSecure from "../../../Hooks/axiosSecure";
import Swal from "sweetalert2";

const AddMenuItem = () => {

    const axiosSecurity = axiosSecure()


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.recipeName.value,
            category: e.target.category.value,
            price: e.target.price.value,
            recipe: e.target.recipeDetails.value,
        };


        axiosSecurity.post('/menus', formData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is Added To Menu.`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    e.target.reset()
                }
            })



        // console.log("Form Data Submitted: ", formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="md:w-1/2 bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <FiEdit3 />
                    Add Menu Item
                </h1>
                <form onSubmit={handleSubmit} className="space-y-2">

                    <div>
                        <label
                            htmlFor="recipeName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Recipe Name*
                        </label>
                        <input
                            type="text"
                            id="recipeName"
                            placeholder="Recipe name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Category*
                            </label>
                            <select
                                id="category"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                <option value="pizza">Pizza</option>
                                <option value="MainCourse">Main Course</option>
                                <option value="soups">Soups</option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                                <option value="dessert">Dessert</option>
                                <option value="popular">Popular</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Price*
                            </label>
                            <input
                                type="number"
                                id="price"
                                placeholder="Price"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="recipeDetails"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Recipe Details*
                        </label>
                        <textarea
                            id="recipeDetails"
                            placeholder="Recipe Details"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition"
                    >
                        Update Recipe Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMenuItem;
