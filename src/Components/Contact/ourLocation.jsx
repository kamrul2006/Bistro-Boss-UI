import React from 'react';
import HeadingTitle from '../Share/HeadingTitle';
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { IoTime } from 'react-icons/io5';

const OurLocation = () => {
    return (
        <div>
            <HeadingTitle subHeading={"Visit Us"} heading={"OUR LOCATION"}></HeadingTitle>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-20'>

                {/* -------1----------- */}
                <div className='border-2'>
                    <div className='bg-orange-300 text-white flex item-center justify-center py-4' >
                        <FaPhoneVolume />
                    </div>
                    <div className='px-5 pb-5'>
                        <div className='text-center space-y-3 bg-slate-300 pt-10 pb-20'>
                            <p className='text-lg font-semibold'>PHONE</p>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>

                {/* -------2----------- */}
                <div className='border-2'>
                    <div className='bg-orange-300 text-white flex item-center justify-center py-4' >
                        <FaLocationDot />
                    </div>
                    <div className='px-5 pb-5'>
                        <div className='text-center space-y-3 bg-slate-300 pt-10 pb-20'>
                            <p className='text-lg font-semibold'>ADDRESS</p>
                            <p>Kishoreganj, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* -------3----------- */}
                <div className='border-2'>
                    <div className='bg-orange-300 text-white flex item-center justify-center py-4' >
                        <IoTime />
                    </div>
                    <div className='px-5 pb-5'>
                        <div className='text-center space-y-3 bg-slate-300 pt-10 pb-12'>
                            <p className='text-lg font-semibold'>WORKING HOURS</p>
                            <p>Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default OurLocation;