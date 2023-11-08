import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import TestimonialCards from "./TestimonialCards/TestimonialCards";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch("https://hire-harbor-server.vercel.app/testimonial")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="lg:text-5xl text-3xl  text-center text-green-500 font-bold py-6">Testimonial</h1>
            <div className="w-3/5 mx-auto space-y-5">
                <p className="lg:text-5xl text-3xl font-bold text-center">What Customer Says</p>
                
            </div>
            <div className="mb-12 flex flex-col items-center justify-center">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 pb-12 mt-12">
                    <div className="lg:max-w-6xl max-w-xs mx-auto lg:p-5 relative ">
                        <Swiper
                            modules={[Navigation, A11y, Autoplay]}
                            spaceBetween={40}
                            autoplay={{delay: 1000}}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1, 
                                    spaceBetween: 20, 
                                },
                                768: {
                                    slidesPerView: 2, 
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2, 
                                    spaceBetween: 50,
                                },
                            }}

                            navigation={{
                                prevEl: '.custom-swiper-button-prev',
                                nextEl: '.custom-swiper-button-next',
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <TestimonialCards testimonial={testimonial} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-3 right-1 lg:right-3 top-1/2 z-10">
                            <div className="custom-swiper-button-prev">
                                <a className="btn btn-circle bg-green-500 border-none text-white">❮</a>
                            </div>
                            <div className="custom-swiper-button-next">
                                <a className="btn btn-circle bg-green-500 border-none text-white">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;