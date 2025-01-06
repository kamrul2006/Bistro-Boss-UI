import React from 'react';
import HeadingTitle from '../Share/HeadingTitle';
import fe from "../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className='bg-cover bg-center my-10' style={{ background: `url(${fe})` }}>

            <div className='w-full h-full object-cover backdrop-blur bg-black/60 text-white p-10'>
                <HeadingTitle
                    heading={'FROM OUR MENU'}
                    subHeading={' Check it out '} />

                <div className='grid grid-cols-2 gap-10 px-20 py-5'>

                    <img src={fe} alt="" className=' mx-auto rounded-xl' />


                    <div className='flex justify-center flex-col gap-5'>
                        <span className='uppercase'>   March 20, 2023 <br />
                            WHERE CAN I GET SOME?</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>

                        <button className="border-b-4  border-white px-5 py-2 rounded-full shadow shadow-white hover:bg-white hover:border-black hover:text-black uppercase text-sm font-semibold w-fit">Read More</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;