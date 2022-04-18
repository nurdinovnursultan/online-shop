import React, { useEffect } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useDispatch, useSelector } from 'react-redux';
import { getSliderImages } from '../../redux/companyActions';

const Slider = () => {
    const dispatch = useDispatch()
    const images = useSelector(state => {
        const { companyReducer } = state
        return companyReducer.slider
    })

    useEffect(() => {
        dispatch(getSliderImages())
    }, [])

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
                // navigation={true}
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