import { useEffect, useState } from "react";
import HeadingTitle from "../Share/HeadingTitle";
import { useLoaderData } from "react-router-dom";

const ShouldTry = () => {
    const data = useLoaderData()

    const [menus, setMenu] = useState(data)

    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => setMenu(data))
    // }, [])

    // console.log(menu)


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
                                <button className="border-b-4 border-black px-5 py-2 rounded-full shadow bg-gray-200 hover:bg-slate-800 hover:border-yellow-600 hover:text-white uppercase text-sm font-semibold">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ShouldTry;