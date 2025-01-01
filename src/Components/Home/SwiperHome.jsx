import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import s1 from "../../assets/home/slide1.jpg"
import s2 from "../../assets/home/slide2.jpg"
import s3 from "../../assets/home/slide3.jpg"
import s4 from "../../assets/home/slide4.jpg"
import HeadingTitle from '../Share/HeadingTitle';


const SwiperHome = () => {
    return (
        <div className='m-20'>

            <HeadingTitle
                heading={'ORDER ONLINE'}
                subHeading={'From 11:00am to 10:00pm'} />


            <div className=' text-white text-center uppercase'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={s1} />
                        <h2 className='text-2xl -mt-20'>Salads</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s2} />
                        <h2 className='text-2xl -mt-20'>Soups</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s3} />
                        <h2 className='text-2xl -mt-20'>pizzas</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s4} />
                        <h2 className='text-2xl -mt-20'>desserts</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s1} />
                        <h2 className='text-2xl -mt-20'>Salads</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s2} />
                        <h2 className='text-2xl -mt-20'>Soups</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s3} />
                        <h2 className='text-2xl -mt-20'>pizzas</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s4} />
                        <h2 className='text-2xl -mt-16'>desserts</h2>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default SwiperHome;