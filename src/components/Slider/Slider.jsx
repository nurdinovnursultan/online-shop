import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
    const images = [
        "https://i.artfile.me/wallpaper/04-07-2018/1920x1080/devushka-devushki--unsort--ryzhevolosye--1360188.jpg",
        "https://i.artfile.me/wallpaper/17-02-2019/1920x1080/devushka-devushki--unsort--ryzhevolosye--1440112.jpg",
        "https://img3.goodfon.com/original/1920x1080/d/9a/model-chernoe-plate-makiyazh.jpg",
        "https://motaen.com/upload/resize/1920/1080/upload/wallpapers/2018/01/27/18/05/55742/brunetka-devuska-plate-nozki-sidit-88a.jpg"

    ]

    return (
        <div className="slider">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {
                    images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;