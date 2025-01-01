import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

import s1 from "../../assets/home/slide1.jpg"
import s2 from "../../assets/home/slide2.jpg"
import s3 from "../../assets/home/slide3.jpg"
import s4 from "../../assets/home/slide4.jpg"


const SwiperHome = () => {
    return (
        <div className='my-20'>

            <div className='text-center'>

                <p className='my-5 text-orange-500'>---From 11:00am to 10:00pm---</p>

                <h1 className='text-3xl py-5 px-10 border-y-2 w-fit mx-auto'>ORDER ONLINE</h1>
            </div>

            <div className='h-[400px] mx-20 my-10'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={s1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s3} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s4} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s3} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={s4} />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default SwiperHome;