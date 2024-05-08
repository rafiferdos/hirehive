// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/parallax'


// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
import Slide from './Slide';

import img1 from '../assets/images/banner1.jpeg'
import img2 from '../assets/images/banner2.jpg'
import img3 from '../assets/images/banner3.jpg'

const Carousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, Parallax]}
            parallax={true}
            className="mySwiper rounded-3xl"
            speed={1000}
        >
            <SwiperSlide>
                <Slide image={img1} text={"Experience the power of professional networking. Connect, collaborate, and succeed."} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={img2} text={"Your dream job is just a click away. Explore our job listings now."} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={img3} text={"Empower your business with top talent. Post your job vacancies with us."} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;