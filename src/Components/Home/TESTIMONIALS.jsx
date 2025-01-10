import React, { useEffect, useState } from 'react';
import HeadingTitle from '../Share/HeadingTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useLoaderData } from 'react-router-dom';



const TESTIMONIALS = () => {

    const data = useLoaderData()

    const [reviews, setReview] = useState(data)

    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews')
    //         .then(res => res.json())
    //         .then(data => setReview(data))
    // }, [])


    return (
        <div className='my-20'>
            <HeadingTitle
                heading={'TESTIMONIALS'}
                subHeading={' What Our Clients Say '} />

            <div className='h-[350px] flex items-center justify-center mx-20'>
                <Swiper navigation={true} modules={[Navigation]}>

                    {reviews.map(review =>

                        <SwiperSlide>
                            <div className='flex items-center justify-center gap-5 flex-col'>

                                {/* <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                </div> */}
                                <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly={true} />


                                <img className='w-32' src="https://img.icons8.com/3d-fluency/100/quote-left.png" alt="quote-left" />

                                <p className='px-48 text-center'>
                                    {review.details}
                                </p>

                                <h1 className='text-4xl text-center text-orange-400'>
                                    {review.name}
                                </h1>

                            </div>
                        </SwiperSlide>)}

                </Swiper>
            </div>

        </div>
    );
};

export default TESTIMONIALS;