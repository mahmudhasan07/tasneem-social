"use client";
import React from "react";
import success from "@/assets/images/social-success.png";
import Image from "next/image";
import video from "@/assets/videos/reviewVideo.mp4";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface categoriesInterface {
  title: string;
  video: string;
}

const categoriesArray: categoriesInterface[] = [
  { title: "Health & Wealth", video: video },
  { title: "Financial services", video: video },
  { title: "Real estate", video: video },
  { title: "Home services", video: video },
  { title: "Health & Wealth", video: video },
  { title: "Financial services", video: video },
  { title: "Real estate", video: video },
  { title: "Home services", video: video },
];

const VideoForBusiness = () => {
  return (
    <section className="lg:py-20 py-10 lg:px-28 md:px-12 px-5 space-y-20">
      <div>
        <h1 className="md:text-5xl text-3xl poppins-bold w-fit mb-8 flex flex-wrap justify-center gap-5">
          Videos
          <Image className="my-auto" width={160} src={success} alt="page" /> For
          <span className="text-primary">business</span>
        </h1>
        <div className="flex">
          <Swiper
            slidesPerView={3.4}
            spaceBetween={0}
            centeredSlides={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              // When the viewport width is 1024px or more (tablets and above)
              1024: {
                slidesPerView: 3.4, // 3 slides at a time
                spaceBetween: 0,
              },
              850: {
                slidesPerView: 2.5,
              },
              // When the viewport width is 768px or more (tablets)
              768: {
                slidesPerView: 1.8, // 2.5 slides at a time for tablets
                spaceBetween: 10, // Add some space between slides
              },
              // When the viewport width is 480px or more (mobile devices)
              480: {
                slidesPerView: 1.5, // 1.5 slides at a time for small mobile screens
                spaceBetween: 10, // Add space between slides
              },
              // For smaller screens
              0: {
                slidesPerView: 1, // 1 slide at a time for small screens
                spaceBetween: 10, // Add some space between slides
              },
            }}
          >
            {categoriesArray.map((e, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <video className="border-2 lg:h-80  lg:w-72 md:w-60 w-48  object-cover rounded-xl">
                    <source src={e.video} type="video/mp4" />
                  </video>
                  <h1>{e.title}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <h1 className="md:text-5xl text-3xl poppins-bold w-fit mb-8 flex flex-wrap justify-center gap-5">
          Videos
          <Image className="my-auto" width={160} src={success} alt="page" /> For
          <span className="text-primary">personal brands</span>
        </h1>
        <div className="flex">
          <Swiper
            slidesPerView={3.4}
            spaceBetween={0}
            centeredSlides={false}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              // When the viewport width is 1024px or more (tablets and above)
              1024: {
                slidesPerView: 3.4, // 3 slides at a time
                spaceBetween: 0,
              },
              850: {
                slidesPerView: 2.5,
              },
              // When the viewport width is 768px or more (tablets)
              768: {
                slidesPerView: 1.8, // 2.5 slides at a time for tablets
                spaceBetween: 10, // Add some space between slides
              },
              // When the viewport width is 480px or more (mobile devices)
              480: {
                slidesPerView: 1.5, // 1.5 slides at a time for small mobile screens
                spaceBetween: 10, // Add space between slides
              },
              // For smaller screens
              0: {
                slidesPerView: 1, // 1 slide at a time for small screens
                spaceBetween: 10, // Add some space between slides
              },
            }}
          >
            {categoriesArray.map((e, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <video className="border-2 lg:h-80  lg:w-72 md:w-60 w-48  object-cover rounded-xl">
                    <source src={e.video} type="video/mp4" />
                  </video>
                  <h1>{e.title}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VideoForBusiness;
