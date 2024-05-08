import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Slide = ({image, text}) => {
    return (
        <div
            data-swiper-parallax="-23%" 
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl lg:w-4/6 mx-auto' data-swiper-parallax="-400" data-swiper-parallax-duration="2000">
                        {text}
                    </h1>
                    <br />
                    <Link to='/add_jobs' className='btn btn-accent btn-outline' data-swiper-parallax="400" data-swiper-parallax-duration="2500">
                        Post Job & Hire Expert
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;