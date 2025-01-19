import { GiKnifeFork } from 'react-icons/gi';
import HeadingTitle from '../../Share/HeadingTitle';

import { useForm } from "react-hook-form"


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)


    return (
        <div className='min-h-screen'>
            <HeadingTitle subHeading={"What's new?"} heading={"ADD AN ITEM"} />

            <div className='bg-gray-200 w-3/4 mx-auto my-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-10 space-y-2'>

                    {/* -------------name---------- */}
                    <div>
                        <label
                            htmlFor="recipeName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Recipe Name*
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            id="recipeName"
                            placeholder="Recipe name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        {/* ------------category-------- */}
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Category*
                            </label>
                            <select
                                {...register("category")}
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


                        {/* ----------price--------------- */}
                        <div>
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Price*
                            </label>
                            <input
                                {...register("price")}
                                type="number"
                                id="price"
                                placeholder="Price"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* --------------recipi------------------ */}
                    <div>
                        <label
                            htmlFor="recipeDetails"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Recipe Details*
                        </label>
                        <textarea
                            {...register("recipe")}
                            id="recipeDetails"
                            placeholder="Recipe Details"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* -------------image---------- */}
                    <div>
                        <label
                            htmlFor="recipeName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Recipe Image *
                        </label>
                        <input
                            {...register("image")}
                            type="file"
                            id="recipeImg"
                            className="file-input file-input-bordered w-full" />
                    </div>


                    <button type="submit"
                        className="w-1/5 py-2 my-5 text-white font-medium bg-gradient-to-r from-[#8B5E3C] to-[#C38743] hover:from-[#7A5033] hover:to-[#B3763B] transition flex items-center justify-center gap-2"
                    ><GiKnifeFork /> Add Item
                    </button>

                </form>
            </div>

        </div>
    );
};

export default AddItems;